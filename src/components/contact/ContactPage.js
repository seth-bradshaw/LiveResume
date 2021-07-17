import React, {useState} from 'react';
import ContactForm from "./ContactForm";
import PageTitle from '../general/titles/PageTitle';

export default function ContactPage() {
    return (
        <div className="content pt-5" id="contact_section">
            <PageTitle title="Contact"/>
            <ContactForm />
        </div>
    )
}
