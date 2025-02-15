import EditProperty from "@/components/edit-property/EditProperty";
import PropertyDetailse from "@/components/manage-hotel/PropertyDetails";


const SingleProperty = ({ params }: { params: { propertyId: string } }) => {
    const {propertyId} = params;
    return ( <>{ propertyId?<EditProperty propertyId={propertyId}/>:<div className="h-[50vh] flex justify-center items-center"></div>}</> );
}
 
export default SingleProperty;