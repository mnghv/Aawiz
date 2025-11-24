'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import toast from 'react-hot-toast';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form submitted:', data);

            toast.success('Form submitted successfully! 🎉', {
                duration: 4000,
            });

            reset();
        } catch (error) {
            toast.error('Failed to submit form. Please try again.', {
                duration: 4000,
            });
        }
    };

    return (
        <Card className='backdrop-blur-sm'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <Input
                    label='Name'
                    placeholder='John Doe'
                    {...register('name')}
                    error={errors.name?.message}
                />

                <Input
                    label='Email'
                    type='email'
                    placeholder='john@example.com'
                    {...register('email')}
                    error={errors.email?.message}
                />

                <Input
                    label='Phone'
                    type='tel'
                    placeholder='+1 (555) 123-4567'
                    {...register('phone')}
                    error={errors.phone?.message}
                />

                <div>
                    <label className='block text-sm font-medium mb-2 text-slate-700 dark:text-sky-300'>
                        Message
                    </label>
                    <textarea
                        className='flex min-h-[120px] w-full rounded-lg border-2 border-blue-400 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm placeholder:text-blue-500/60 focus:outline-none focus:border-blue-600 transition-all disabled:cursor-not-allowed disabled:opacity-50 dark:border-sky-500/50 dark:bg-slate-800/80 dark:text-sky-200 dark:placeholder:text-sky-400/60 dark:focus:border-sky-400'
                        placeholder='Your message here...'
                        {...register('message')}
                    />
                    {errors.message && (
                        <p className='mt-1 text-sm text-red-600 dark:text-red-400'>
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full'>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </Card>
    );
}
