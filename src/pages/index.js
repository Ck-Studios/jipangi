import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Index(props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/main")
  }, []);

  return (
    <div/>
  )
}
