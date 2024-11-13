import { Spacer } from "@nextui-org/react"
import SparklesText from "../magicui/sparkles-text"

const BlockTitle = ({ title }: { title: string }) => {
    return (
        <>
            <div className="flex flex-row items-center gap-1 ">
                <span className="w-[70%] h-[1px] bg-white "></span>
                <h1 className="font-bold  text-white ">
                    <SparklesText sparklesCount={4} text={title} className="text-[20px] md:text-[26px]" />
                </h1>
            </div>
            <Spacer className="my-4" />
        </>

    )
}

export default BlockTitle