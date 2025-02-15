import PropertyDetailse from "@/components/manage-hotel/PropertyDetails";


const SingleProperty = ({ params }: { params: { propertyId: string } }) => {
    const {propertyId} = params;
    return ( <>{ propertyId?<PropertyDetailse propertyId={propertyId}/>:<div className="h-[50vh] flex justify-center items-center"></div>}</> );
}
 
export default SingleProperty;