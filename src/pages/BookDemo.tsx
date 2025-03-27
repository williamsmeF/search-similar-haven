
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar, Clock, Building, Users, BriefcaseIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  companySize: z.string(),
  demoType: z.string(),
  date: z.string().min(1, "Please select a date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  additionalInfo: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

const BookDemo = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      demoType: "product",
      date: "",
      timeSlot: "",
      additionalInfo: "",
    },
  });

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await form.trigger(["name", "email", "company", "jobTitle", "companySize"]);
      if (isValid) setStep(2);
    }
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
  };

  const onSubmit = (data: DemoFormValues) => {
    // For demo purposes, we'll just navigate to the confirmation page
    // In a real application, this would send data to a backend
    toast.success("Demo booking successful!");
    // Store demo data in session storage for retrieval on confirmation page
    sessionStorage.setItem("demoBooking", JSON.stringify({
      ...data,
      bookingId: "DEMO-" + Math.floor(Math.random() * 10000)
    }));
    navigate("/booking-confirmation");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-coveo-lightGray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Book a Demo</h1>
              <p className="text-muted-foreground">
                See how Coveo can transform your digital experience
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-coveo-blue' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-coveo-blue text-white' : 'bg-muted border'}`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Your Info</span>
                </div>
                <div className={`flex-1 h-1 mx-4 ${step >= 2 ? 'bg-coveo-blue' : 'bg-muted'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-coveo-blue' : 'text-muted-foreground'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-coveo-blue text-white' : 'bg-muted border'}`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Schedule</span>
                </div>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                              <Input placeholder="Your company" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <BriefcaseIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                              <Input placeholder="Your job title" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-50">1-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501-1000">501-1000 employees</SelectItem>
                              <SelectItem value="1000+">1000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-coveo-blue hover:bg-coveo-blue/90"
                    >
                      Next Step
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="demoType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>What would you like to see?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="product" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  General product overview
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="search" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Search capabilities
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="commerce" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Commerce solutions
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="service" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Service & Support features
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                              <Input
                                type="date"
                                className="pl-10"
                                min={new Date().toISOString().split('T')[0]}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeSlot"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4 text-gray-500" />
                                  <SelectValue placeholder="Select time slot" />
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="09:00-10:00">09:00 - 10:00 AM</SelectItem>
                              <SelectItem value="10:00-11:00">10:00 - 11:00 AM</SelectItem>
                              <SelectItem value="11:00-12:00">11:00 - 12:00 PM</SelectItem>
                              <SelectItem value="13:00-14:00">01:00 - 02:00 PM</SelectItem>
                              <SelectItem value="14:00-15:00">02:00 - 03:00 PM</SelectItem>
                              <SelectItem value="15:00-16:00">03:00 - 04:00 PM</SelectItem>
                              <SelectItem value="16:00-17:00">04:00 - 05:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your specific needs or questions"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="md:flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="md:flex-1 bg-coveo-blue hover:bg-coveo-blue/90"
                      >
                        Book Demo
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDemo;
