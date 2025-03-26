import Image from "next/image";
import Link from "next/link";  
import Layout from "./navigation"

export default function Home() {
  return (

    <Layout>
      
      <h1 className="text-3xl font-bold mb-6"> Welcome to the home page! </h1>



      <Link href= "/about"> Go to About Page </Link> <br></br>

      <Link href= "/posts/1"> Go to post one </Link> <br></br>
      <Link href= "/posts/2"> Go to post two </Link>
      <p> Your API key is: {process.env.NEXT_PUBLIC_API_KEY}</p>

    </Layout>


  );
}
