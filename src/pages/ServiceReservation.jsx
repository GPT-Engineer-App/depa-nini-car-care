import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "sonner";

const ServiceReservation = () => {
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    date: null,
    provider: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add reservation logic here
    console.log("Service reserved:", formData);
    toast.success("Order confirmed!");
    navigate("/profile");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-3xl text-center">Service Reservation</h1>
        <div>
          <Label htmlFor="service">Service</Label>
          <Select name="service" onValueChange={(value) => handleChange({ target: { name: "service", value } })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="exterior washing">Exterior Washing</SelectItem>
              <SelectItem value="interior cleaning">Interior Cleaning</SelectItem>
              <SelectItem value="tire repair">Tire Repair</SelectItem>
              <SelectItem value="battery repair">Battery Repair</SelectItem>
              <SelectItem value="mechanical fault repair">Mechanical Fault Repair</SelectItem>
              <SelectItem value="oil change">Oil Change</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date and Time</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                {formData.date ? format(formData.date, "PPP p") : "Pick a date and time"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label htmlFor="provider">Provider</Label>
          <Select name="provider" onValueChange={(value) => handleChange({ target: { name: "provider", value } })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto-assign">Auto-Assign</SelectItem>
              <SelectItem value="provider1">Provider 1</SelectItem>
              <SelectItem value="provider2">Provider 2</SelectItem>
              <SelectItem value="provider3">Provider 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Reserve Service</Button>
      </form>
    </div>
  );
};

export default ServiceReservation;