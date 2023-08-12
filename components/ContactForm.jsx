import React, { useState } from 'react';
import { sendContactForm } from "../lib/api";
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea, Button, Text,  } from "@chakra-ui/react";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      setShowSuccess(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  



    try {
      // Call the sendContactForm function to submit the form data
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Reset the form and state
        setState({
          values: initValues,
          touched: {},
          isLoading: false,
        });

        // Optionally, you can display a success message to the user
        console.log("Form submitted successfully");
      } else {
        // Handle non-OK response (error)
        const responseData = await response.json();
        console.error("Error submitting contact form:", responseData.message);
        // Update state to reflect the error
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    } catch (error) {
      // Handle fetch errors
      console.error("Error submitting contact form:", error);
      // Update state to reflect the error
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div>
        {error && (
            <Text className="ml-9" my={4} style={{color:'red', fontSize: '12px'}}>
                {error}
            </Text>

        )}
        {/* Show a custom success message */}
      {showSuccess && (
        <div
          className="ml-9 my-4 w-[300px] p-2 mt-[-0.3rem] rounded-md bg-green-100 border border-green-300 text-green-800"
          style={{ fontSize: '12px' }}
        >
          Message sent successfully!
        </div>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel className="text-black ml-9">Name</FormLabel>
        <Input
          className="block ml-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[300px]"
          name="name"
          type="text"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage className="text-red-600 ml-9 text-sm">Name is required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel className="text-black ml-9">Email</FormLabel>
        <Input
          className="block ml-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[300px]"
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage className="text-red-600 text-sm ml-9">Email is required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
        <FormLabel className="text-black ml-9">Subject</FormLabel>
        <Input
          className="block ml-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-[300px]"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage className="text-red-600 text-sm ml-9">Subject is required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
        <FormLabel className="text-black ml-9">Message</FormLabel>
        <Textarea
          className="block ml-9 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 w-[300px]"
          name="message"
          type="text"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage className="text-red-600 text-sm ml-9">Message is required</FormErrorMessage>
      </FormControl>
      
      <Button
        className="bg-black text-white rounded ml-9"
        style={{ padding: '6px 8px' }}
        variant="outline"
        colorScheme="blue"
        disabled={!values.name || !values.email || !values.subject || !values.message || isLoading}
        onClick={onSubmit}
        isLoading={isLoading}
      >
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;


