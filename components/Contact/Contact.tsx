"use client"
import { useEffect, useState } from 'react';
import { FaMailBulk } from "react-icons/fa";
import { Image, Spacer, Spinner } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Textarea } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdLocalPhone } from "react-icons/md"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, } from "@nextui-org/react";
import BlockTitle from '../BlockTitle/BlockTitle';
import ShineBorder from '../magicui/shine-border';
import LetterPullup from '../magicui/letter-pullup';





export const LineColored = () => <span className='BorderColor absolute left-0 bottom-[-5px] h-1 mt-1 bg-gradient-to-r from-[#400d64] from-10% via-[#ff82f3] via-50%  to-[#7b13ff] to-100%  w-full z-20'></span>

const Talk = () => {
    return (
        <div className='block'>
        
        <LetterPullup words={"Faites part de votre expérience sportive."} className='text-black font-bold text-[20px]' delay={0.07}   />
        </div>
    )
}


const Contact = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 text-white'>
            <div className=''>
                <h2 className='font-extrabold text-white flex items-center gap-2'><MdOutlineAlternateEmail /> E-mail :</h2>
                <p className='relative inline-block'> Rafanomezantsoa424@gmail.com
                    <LineColored />
                </p>
            </div>
            <div className='relative'>
                <h2 className='font-extrabold text-white flex items-center  gap-2'><MdLocalPhone /> Tel :</h2>
                <p className='relative inline-block'>
                    +261344108655
                    <LineColored />
                </p>

            </div>
        </div>
    )
}

const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    mail: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});



const Formulaire = () => {

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
            const response = await fetch('/api/send-mail', {
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
                className=" text-white  bg-[url('/sport/trainer.jpg')] bg-cover bg-center relative"
            >
                <ModalContent className=''>

                    <>  
                        <div className="absolute top-0 left-0 h-full  w-full bg-[#2C2C2C] opacity-40 z-10 "></div>
                        <ModalHeader className="mx-auto z-50">Message bien envoyer ! 👍</ModalHeader>
                        <ModalBody className='mx-auto mt-5 '>
                      
                        </ModalBody>
                        <ModalFooter className='relative'>
                            <Button className="bg-bgBaseColor text-white z-50" variant="shadow" onPress={Close} size="sm">
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
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <div className='md:w-[50%] w-full'>
                    <Input variant={"underlined"} type="text" {...register("firstName")} label="Nom" isClearable
                        className='InputCustom bg-[rgba(256,256,256,0.5)] rounded text-white ' />
                    {errors.firstName && <p className='text-[#ff0000] text-[12px]'>{errors.firstName.message}</p>}
                </div>
                <div className='md:w-[50%] w-full'>
                    <Input variant={"underlined"} type="email" {...register("mail")} label="Email" isClearable
                        className='InputCustom bg-[rgba(256,256,256,0.5)] rounded text-white' />
                    {errors.mail && <p className='text-[#ff0000] text-[12px]'>{errors.mail.message}</p>}
                </div>
            </div>
            <Spacer y={4} />
            <Input variant={"underlined"} type="text" {...register("subject")} label="Sujet" isClearable
                className='InputCustom bg-[rgba(256,256,256,0.5)] rounded text-white' />
            {errors.subject && <p className='text-[#ff0000] text-[12px]'>{errors.subject.message}</p>}
            <Spacer y={4} />
            <Textarea key={1} {...register("message")} variant={"underlined"} label="Description"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0 InputCustom bg-[rgba(256,256,256,0.5)] rounded text-white" />
            {errors.message && <p className='text-[#ff0000] text-[12px]'>{errors.message.message} </p>}
            <Spacer y={4} />

            <div className='flex flex-row justify-start'>
                
                
                <Button isLoading={load} className="bg-[rgba(256,256,256,0.5)]  text-black" radius="none"   endContent={<BsFillSendFill size={"1.2em"}   />} 
                 spinner={<Spinner />} type='submit' > Envoyer 
                 </Button>
               </div>

            <SuccessNotif show={status} />
        </form>
    );
}



const ContactForm = () => {

    // const [SomeLibrary, setSomeLibrary] = useState<any>(null);
    // const [AnotherLibrary, setAnotherLibrary] = useState<any>(null);

    // // Charger dynamiquement le composant bibliotheque coté client 
    // useEffect(() => {
    //     // Charger dynamiquement la première bibliothèque
    //     if (typeof window !== 'undefined') {

    //       // Charger dynamiquement une autre bibliothèque
    //       import('../BlockTitle/BlockTitle').then((module) => {
    //         setAnotherLibrary(module.default || module);
    //       });
    //     }
    //   }, []);
    
    //   if (!SomeLibrary || !AnotherLibrary) {
    //     // Afficher un fallback pendant le chargement des bibliothèques
    //     return <div className='text-red-600 '>Chargement des composants...</div>;
    //   }

    return (
        <div className='w-full ' id='contact'>
            {/* <AnotherLibrary.BlockTitle title="Contact" /> */}
            <BlockTitle title="Contact" />
            <Spacer className="my-4" />

            <ShineBorder
                className="relative w-full overflow-hidden md:shadow-xl bg-[rgba(256,256,256,0.1)] first-line:"
                color={["#FFFFFF", "#FFC63D", "#FFFFFF", "#FFC63D"]}
             
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
                    <div className="p-2">
                        <div className="relative">
                            <Image src="/sport/contact.jpg" alt="svg" removeWrapper={true} className="image-animate w-full h-full" />
                        </div>
                    </div>

                    <div className="p-3">
                        <Talk />
                        <Spacer y={6} />
                        <Formulaire />
                    </div>
                </div>

            </ShineBorder >
        </div>

    )
}

export default ContactForm