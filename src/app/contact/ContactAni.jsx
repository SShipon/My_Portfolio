import React from 'react';
import { useLottie } from "lottie-react";
import contact from '../../../public/register/95100-contact-us.json'

const ContactAni = () => {
    const options = {
        animationData: contact,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default ContactAni;