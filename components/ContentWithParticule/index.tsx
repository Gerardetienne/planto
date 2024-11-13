import Particles from "@/components/magicui/particles";
import { Spacer } from "@nextui-org/spacer";

interface Props{
    children: React.ReactNode;
}

const ContentWithParticule = ({children}:Props) => {
    return(
        <div className="relative flex w-full h-full flex-col bg-background md:shadow-x bg-black">
            <Particles
             className="fixed top-0 bottom-0"
             quantity={1000}
             ease={80}
             color={"#fff"}
             refresh
            />
            {children}

            <Spacer className="my-10" />
        </div>
    )
}

export default ContentWithParticule