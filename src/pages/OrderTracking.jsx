import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { toast } from "sonner";
import "leaflet/dist/leaflet.css";

const OrderTracking = () => {
  const { orderId } = useParams();
  const [orderStatus, setOrderStatus] = useState("Order confirmed");
  const [providerLocation, setProviderLocation] = useState([51.505, -0.09]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setOrderStatus((prevStatus) => {
        switch (prevStatus) {
          case "Order confirmed":
            toast.success("Service provider on the way!");
            return "Service provider on the way";
          case "Service provider on the way":
            toast.success("Service in progress!");
            return "Service in progress";
          case "Service in progress":
            toast.success("Service completed!");
            return "Service completed";
          default:
            return prevStatus;
        }
      });

      // Simulate provider location update
      setProviderLocation([
        providerLocation[0] + 0.001,
        providerLocation[1] + 0.001,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [providerLocation]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mb-4">Order Tracking</h1>
      <p className="text-center mb-4">Order ID: {orderId}</p>
      <p className="text-center mb-4">Current Status: {orderStatus}</p>
      <MapContainer
        center={providerLocation}
        zoom={13}
        scrollWheelZoom={false}
        className="h-96 w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={providerLocation}>
          <Popup>Service Provider Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OrderTracking;