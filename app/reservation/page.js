import ReservationDetails from "@/components/ReservationDetails/ReservationDetails";
import { Suspense } from "react";


export default function Reservation() {
    
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <ReservationDetails></ReservationDetails>
            </Suspense>
        </div>
    )
}
