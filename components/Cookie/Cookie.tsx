'use client'

import CookieConsent from "react-cookie-consent";
import { getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Cookie() {

    return (

                <CookieConsent

                    enableDeclineButton
                    flipButtons
                    location="bottom"
                    declineButtonText={"Refuser tout"}
                    buttonText={"Accepter tout"}
                    cookieName="skiillzV2CookieConsent"

                    style={{
                        background: '#ffffff',
                        color: '#333333',
                        fontSize: '14px',
                        fontWeight: '300',
                        border: '1px solid rgba(00, 00, 00, 0.1)',
                        boxShadow: '0 -1px 10px 0 rgba(172,171,171,.3)',
                        zIndex: 999999,
                    }}

                    containerClasses="cookieConsent mx-2 mb-2 rounded-lg z-[1500]"
                    contentClasses="text-capitalize"
                    buttonWrapperClasses="mt-0 buttonCookieWrapper"


                    declineButtonStyle={{
                        color: '#222222',
                        border: '1px solid #ccc',
                        fontSize: '10.5px',
                        borderRadius: '3px',
                        background: '#F9F9F9',
                        padding: '7px 20px',
                        fontWeight: '300'
                    }}


                    buttonStyle={{
                        color: '#000',
                        fontSize: '10.5px',
                        borderRadius: '3px',
                        background: '#FFC63D',
                        padding: '7px 20px',
                        fontWeight: '600'
                    }}

                    onAccept={
                        () => {
                            console.log('userAcceptCookie')
                        }
                    }

                    onDecline={() => {
                        console.log('userDeclinedCookie')
                    }}

                    expires={5}
                    overlay

                // debug={true}
                >

                    <div className="grid grid-cols-2 grid-flow-col gap-3 ">
                        <div className="relative " >
                            <Image
                                alt={'Sport'}
                                width={80}
                                height={80}
                                src={'/gerard-removebg-preview.png'}
                                priority
                                className="LogoSk"
                            />
                        </div>

                        <div className="text-center flex flex-row items-center justify-start">
                            <h2 className="text-[13px] font-medium color-[#222222]">{"Gérer votre confidentialité"}</h2>
                        </div>

                    </div>
                    <p
                        className="text-[10.5px] text-left mt-2 color-[#222222]"

                    >
                        {"Nous utilisons des cookies sur notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant vos préférences et vos visites répétées."}
                        <br />
                  
                    </p>

                    <div className="flex flex-row justify-center mt-2">
                        <Link href={"#"} target="_blank" className="underline mx-1 text-[10.5px] text-[#1E73BE]" >{"Politique cookies"}</Link>
                        <Link href={"/declaration-de-confidentialite"} target="_blank" className="underline mx-1 text-[10.5px] text-[#1E73BE]" >{'Déclaration de confidentialite'} </Link>
                    </div>

                </CookieConsent>

    );
}

export default Cookie;
