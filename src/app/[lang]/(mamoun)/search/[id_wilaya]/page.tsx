import HotelsFilter from "../components/HotelsFilter";


export default function Page({
  params: { id_wilaya }
}: {
  params: { id_wilaya: string }
}) {
  
  return (
    <>
     <HotelsFilter id_wilaya={id_wilaya}/>
    </>
  );
}