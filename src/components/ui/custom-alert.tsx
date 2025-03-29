
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, InfoIcon, XCircle } from "lucide-react";

interface CustomAlertProps {
  title?: string;
  description: string;
  variant?: "default" | "destructive" | "success" | "info";
  className?: string;
}

const CustomAlert = ({ 
  title, 
  description, 
  variant = "default", 
  className 
}: CustomAlertProps) => {
  const getIcon = () => {
    switch (variant) {
      case "destructive":
        return <XCircle className="h-5 w-5 text-destructive" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "info":
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  const getAlertClass = () => {
    switch (variant) {
      case "success":
        return "border-green-500/30 text-green-500";
      case "info":
        return "border-blue-500/30 text-blue-500";
      default:
        return "";
    }
  };

  return (
    <Alert 
      variant={variant === "success" || variant === "info" ? "default" : variant} 
      className={`${getAlertClass()} ${className}`}
    >
      {getIcon()}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
