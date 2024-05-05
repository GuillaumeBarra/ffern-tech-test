"use client"
import { z } from "zod"
import { useForm, FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as React from 'react';


import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { ConfirmButton } from "../button/ConfirmButton";
import { LockedButton } from "../button/LockedButton";
import { GetFfernFriendResponse } from "@/api/fetchFfernFriend";
import { UpdateFfernFriendsRequest, postFfernFriend } from "@/actions/postFfernFriend";
import { SuccessToast } from "../toast/SuccessToast";
 
const formSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    addressLineOne: z.string().min(2, 'Address line 1 is required'),
    addressLineTwo: z.string().optional(),
    city: z.string().min(2, 'City is required').max(50, 'City name too long'),   
    postcode: z.string().min(2, 'Full postcode is required').max(20, 'Postcode is too long'),
    stateOrCounty: z.string().min(2, 'State is required').max(50, 'State name too long'),
    country: z.enum(['United Kingdom', 'Netherlands', 'United States']),
})

interface FormProps {
  ffernFriend: GetFfernFriendResponse;
  submitData: (friendId: string, values: UpdateFfernFriendsRequest) => void;
}

export const CardForm = ({ ffernFriend, submitData }: FormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: ffernFriend.firstName ?? '',
          lastName: ffernFriend.lastName ?? '',
          addressLineOne: ffernFriend.addressLineOne ?? '',
          addressLineTwo: ffernFriend.addressLineTwo ?? '',
          city: ffernFriend.city ?? '',
          postcode: ffernFriend.postcode ?? '',
          stateOrCounty: ffernFriend.stateOrCounty ?? '',
          country: 'United Kingdom',
        },
    })

    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [isSubmitError, setIsSubmitError] = useState(false);

    const watchFields = form.watch() as FieldValues;
    const [allRequiredFieldsFilled, setAllRequiredFieldsFilled] = useState(false);

    useEffect(() => {
        const requiredFields = ['firstName', 'lastName', 'addressLineOne', 'city', 'postcode', 'stateOrCounty', 'country'];
        const allFilled = requiredFields.every(field => watchFields[field]);
        setAllRequiredFieldsFilled(allFilled);
      }, [watchFields]);
    
  async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('on submit clicked')
          setIsLoading(true);
          const mappedValues = {
            ...values,
            country: values.country === 'United Kingdom' ? 'GB' : values.country === 'Netherlands' ? 'NL' : 'US' as 'US' | 'NL' | 'GB'
          };
          try {
            submitData('siobhan-1234',mappedValues);
            setIsSubmitSuccess(true);
            form.reset();
          } catch (error) {
            setIsSubmitError(true);
          } finally {
            setIsLoading(false);
          }
      }
      

    const errorStyle = (fieldName: keyof z.infer<typeof formSchema>) => 
      form.formState.errors[fieldName] ? "bg-errorLight text-errorDark border-error" : "";

    const focusStyle = "focus:bg-sandExtraLight focus:ring-2 focus:ring-terracotta";
    
    return (
      <div className="flex w-full justify-start bg-sandDark rounded-md p-4">
        <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {!isLoading && !isSubmitSuccess && (
            <><div className="flex flex-row space-x-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input initialValue={ffernFriend.firstName} label={"First Name"} {...field} className={`${errorStyle("firstName")} ${focusStyle}`} />
                      </FormControl>
                    </FormItem>
                  )} />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input initialValue={ffernFriend.lastName} label={"Last Name"} {...field} className={`${errorStyle("lastName")} ${focusStyle}`} />
                      </FormControl>
                    </FormItem>
                  )} />
              </div><FormField
                  control={form.control}
                  name="addressLineOne"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input initialValue={ffernFriend.addressLineOne} label={"Address Line 1"} {...field} className={`${errorStyle("addressLineOne")} ${focusStyle}`} />
                      </FormControl>
                    </FormItem>
                  )} /><FormField
                  control={form.control}
                  name="addressLineTwo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input initialValue={ffernFriend.addressLineTwo} label={"Address Line 2 (Optional)"} {...field} className={`${errorStyle("addressLineTwo")} ${focusStyle}`} />
                      </FormControl>
                    </FormItem>
                  )} /><div className="flex flex-row space-x-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input initialValue={ffernFriend.city} label={"City"} {...field} className={`${errorStyle("city")} ${focusStyle}`} />
                        </FormControl>
                      </FormItem>
                    )} />
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input initialValue={ffernFriend.postcode} label={"Postcode"} {...field} className={`${errorStyle("postcode")} ${focusStyle}`} />
                        </FormControl>
                      </FormItem>
                    )} />
                </div><FormField
                  control={form.control}
                  name="stateOrCounty"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input initialValue={ffernFriend.stateOrCounty} label={"State/County"} {...field} className={`${errorStyle("stateOrCounty")} ${focusStyle}`} />
                      </FormControl>
                    </FormItem>
                  )} /><FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field} onValueChange={field.onChange} defaultValue={ffernFriend.country}>
                          <SelectTrigger className={focusStyle}>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent className='border border-terracotta'>
                            <SelectGroup>
                              {['United Kingdom', 'Netherlands', 'United States'].map((option, index) => (
                                <SelectItem key={index} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )} /></>
          )}
            {isSubmitSuccess ? (
              <SuccessToast />
            ) : (
              allRequiredFieldsFilled || isLoading ? (
                <ConfirmButton isLoading={isLoading} text="Confirm Address" />
              ) : (
                <LockedButton text="Confirm Address" />
              )
            )}
            </form>
          </Form>
          </div>
            </div>
      )
}