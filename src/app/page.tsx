import Button from "@/components/ui/Button";
import { fetchHomePage } from "@/lib/fetchers"; // adjust the path accordingly

export default async function Home() {
  const data = await fetchHomePage();
  // console.log("Homepage =>",data);

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <Button href="/contact" variant="simple">Hire Me</Button> */}
  
    </div>
  );
}
