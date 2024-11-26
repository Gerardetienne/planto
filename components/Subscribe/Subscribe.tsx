'use client'
import { useState } from 'react';

import { Spacer, Spinner } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Input } from "@nextui-org/react";
import { BsFillSendFill } from "react-icons/bs";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, } from "@nextui-org/react";




export const LineColored = () => <span className='BorderColor absolute left-0 bottom-[-5px] h-1 mt-1 bg-gradient-to-r from-[#400d64] from-10% via-[#ff82f3] via-50%  to-[#7b13ff] to-100%  w-full z-20'></span>


const SignupSchema = yup.object().shape({

    mail: yup.string().email().required(),

});

interface Props{
    cssCustom?:string 
    btnTxt?:string
}

const Formulaire = ({cssCustom,btnTxt}:Props) => {

    const [status, setStatus] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);


    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({

        resolver: yupResolver(SignupSchema)

    });


    const onSubmit = async (data: any) => {
        try {
            setLoad(true)
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Envoyez les données du formulaire
            });

            if (response.status === 200) {
                setStatus(true)
                setLoad(false)
                reset()

                //console.log('');
            } else {
                setStatus(false)
                // console.error('Email sending failed');
                // Affichez un message d'erreur à l'utilisateur si nécessaire
            }
        } catch (error) {
            setStatus(false)
            // Gérez les erreurs de requête si nécessaire
        }
    };

    const SuccessNotif = ({ show }: { show: boolean }) => {
        const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

        const Close = () => {
            setStatus(!show)
        }
        return (
            <Modal
                isOpen={show}
                placement={"center"}
                onOpenChange={onOpenChange}
                backdrop={"blur"}
                className=" text-white  bg-[url('/skills/message.svg')] bg-cover bg-center"
            >
                <ModalContent className='bg-slate-400/10'>

                    <>
                        <ModalHeader className="mx-auto ">Message bien envoyer !</ModalHeader>
                        <ModalBody className='mx-auto mt-5 '>
                      
                        </ModalBody>
                        <ModalFooter className='relative'>
                            <Button className="bg-bgBaseColor text-white" variant="shadow" onPress={Close} size="sm">
                                Fermer
                            </Button>
                            <LineColored />
                        </ModalFooter>
                    </>

                </ModalContent>
            </Modal>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-wrap md:flex-nowrap items-center border border-white rounded  ">
                <div className='md:w-[70%] w-full'>
                <Input variant={"underlined"} type="email" {...register("mail")} label="Email" isClearable
                        className='InputCustom  rounded text-white bg-[rgba(256,256,256,0.5)]' />
                    {errors.mail && <p className='text-[#ff0000] text-[12px]'>{errors.mail.message}</p>}
                </div>

                <div className='md:w-[30%] w-full p-1 '>
                <Button isLoading={load} className={`${cssCustom ? cssCustom : "text-black bg-white border border-bgBaseColor "}  py-6`} radius="none" size='md'  fullWidth={true} endContent={<BsFillSendFill size={"1.2em"}   />} 
                 spinner={<Spinner />} type='submit' > {btnTxt ? btnTxt : "Envoyer"}
                 </Button>
                 </div>

            </div>
            <Spacer y={4} />
            <SuccessNotif show={status} />
        </form>
    );

}




const Subscribe = ({cssCustom,btnTxt }:Props) => {

    return (
        <div className='w-full ' id='contact'>
                        <Formulaire cssCustom={cssCustom} btnTxt={btnTxt}   />
        </div>

    )
}

export default Subscribe