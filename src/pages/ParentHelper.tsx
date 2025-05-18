
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Smartphone, Laptop, Tablet, Wifi, Shield } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from '@/components/SectionHeader';

const formSchema = z.object({
  deviceType: z.enum(['smartphone', 'tablet', 'laptop', 'wifi']),
  checkType: z.enum(['content', 'screen-time', 'apps', 'wifi-settings', 'child-account']),
  reason: z.enum(['setup', 'maintenance', 'concern']),
});

type FormValues = z.infer<typeof formSchema>;

const ParentHelper = () => {
  const { toast } = useToast();
  const [result, setResult] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deviceType: 'smartphone',
      checkType: 'content',
      reason: 'setup',
    },
  });
  
  const onSubmit = (values: FormValues) => {
    // Generate appropriate advice based on selections
    let generatedResult = '';
    
    // Device type context
    if (values.deviceType === 'smartphone' || values.deviceType === 'tablet') {
      if (values.deviceType === 'smartphone') {
        generatedResult += 'For Smartphone: ';
      } else {
        generatedResult += 'For Tablet: ';
      }
      
      // Check type
      if (values.checkType === 'content') {
        generatedResult += 'To manage content filtering, ';
        if (values.reason === 'setup') {
          generatedResult += 'you should set up content restrictions in your device settings. See our iOS Content Restrictions or Android Family Link guides.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'regularly review blocked content and adjust settings as your child grows.';
        } else {
          generatedResult += 'check the content filtering settings and browser history to address your concerns.';
        }
      } else if (values.checkType === 'screen-time') {
        generatedResult += 'For screen time management, ';
        if (values.reason === 'setup') {
          generatedResult += 'use the built-in Screen Time (iOS) or Digital Wellbeing (Android) features to set daily limits.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'review your child\'s usage patterns and adjust time limits accordingly.';
        } else {
          generatedResult += 'check the screen time reports to see if there are concerning patterns of usage.';
        }
      } else if (values.checkType === 'apps') {
        generatedResult += 'For app management, ';
        if (values.reason === 'setup') {
          generatedResult += 'review each app\'s age rating and set up app purchase approval requirements.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'regularly check for new app installations and review permissions.';
        } else {
          generatedResult += 'investigate which apps are being used most frequently and check their privacy settings.';
        }
      } else if (values.checkType === 'child-account') {
        generatedResult += 'For child accounts, ';
        if (values.reason === 'setup') {
          generatedResult += 'follow our guide for setting up an iOS Child Account or Android Child Account.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'periodically review the account restrictions and adjust as your child matures.';
        } else {
          generatedResult += 'check the account settings and activity to address any concerns.';
        }
      }
    } else if (values.deviceType === 'laptop') {
      generatedResult += 'For Laptop: ';
      
      if (values.checkType === 'content') {
        generatedResult += 'To manage content filtering, ';
        if (values.reason === 'setup') {
          generatedResult += 'install family-friendly browsers or content filtering software.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'update filtering rules and review browser history regularly.';
        } else {
          generatedResult += 'check browser history and consider more restrictive content filters.';
        }
      } else if (values.checkType === 'screen-time') {
        generatedResult += 'For screen time management, ';
        if (values.reason === 'setup') {
          generatedResult += 'set up parental controls that include time limits for computer usage.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'adjust time limits based on school schedules and other activities.';
        } else {
          generatedResult += 'review computer usage logs to address potential overuse.';
        }
      } else if (values.checkType === 'apps') {
        generatedResult += 'For software management, ';
        if (values.reason === 'setup') {
          generatedResult += 'create a limited user account for your child and restrict software installation.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'regularly check installed programs and remove inappropriate software.';
        } else {
          generatedResult += 'investigate recently installed software that might be causing concerns.';
        }
      } else if (values.checkType === 'child-account') {
        generatedResult += 'For child accounts, ';
        if (values.reason === 'setup') {
          generatedResult += 'create a separate user account with appropriate restrictions in the operating system.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'periodically review account permissions and update as needed.';
        } else {
          generatedResult += 'check account activity logs to address any concerning behavior.';
        }
      }
    } else if (values.deviceType === 'wifi') {
      generatedResult += 'For WiFi Network: ';
      
      if (values.checkType === 'wifi-settings') {
        if (values.reason === 'setup') {
          generatedResult += 'See our guide on changing your router password and setting up content filtering at the network level.';
        } else if (values.reason === 'maintenance') {
          generatedResult += 'Regularly update your router firmware and review connected devices for unauthorized access.';
        } else {
          generatedResult += 'Check router logs for unusual activity and consider strengthening your network security.';
        }
      } else {
        generatedResult += 'For network-wide controls, visit our WiFi Safety page for comprehensive guidance.';
      }
    }
    
    setResult(generatedResult);
    toast({
      title: "Helper Results Generated",
      description: "See your personalized guidance below",
    });
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12">
        <SectionHeader 
          title="Parent Helper" 
          subtitle="Get personalized guidance for managing your child's digital safety"
          className="mb-8 text-center"
        />
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="deviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-800">
                        What device do you want to check?
                      </FormLabel>
                      <div className="pt-2">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="smartphone" />
                            </FormControl>
                            <FormLabel className="flex items-center gap-2 cursor-pointer font-normal">
                              <Smartphone className="h-5 w-5 text-kid-purple" />
                              Smartphone
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="tablet" />
                            </FormControl>
                            <FormLabel className="flex items-center gap-2 cursor-pointer font-normal">
                              <Tablet className="h-5 w-5 text-kid-blue" />
                              Tablet
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="laptop" />
                            </FormControl>
                            <FormLabel className="flex items-center gap-2 cursor-pointer font-normal">
                              <Laptop className="h-5 w-5 text-kid-green" />
                              Laptop/Computer
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="wifi" />
                            </FormControl>
                            <FormLabel className="flex items-center gap-2 cursor-pointer font-normal">
                              <Wifi className="h-5 w-5 text-kid-yellow" />
                              WiFi Network
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="checkType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-800">
                        What do you want to check or manage?
                      </FormLabel>
                      <div className="pt-2">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          {form.watch('deviceType') !== 'wifi' ? (
                            <>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="content" />
                                </FormControl>
                                <FormLabel className="cursor-pointer font-normal">
                                  Content Filtering
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="screen-time" />
                                </FormControl>
                                <FormLabel className="cursor-pointer font-normal">
                                  Screen Time
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="apps" />
                                </FormControl>
                                <FormLabel className="cursor-pointer font-normal">
                                  Apps & Software
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="child-account" />
                                </FormControl>
                                <FormLabel className="cursor-pointer font-normal">
                                  Child Account
                                </FormLabel>
                              </FormItem>
                            </>
                          ) : (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="wifi-settings" />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                WiFi Settings & Security
                              </FormLabel>
                            </FormItem>
                          )}
                        </RadioGroup>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-800">
                        Why are you checking?
                      </FormLabel>
                      <div className="pt-2">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="setup" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Initial Setup
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="maintenance" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Regular Maintenance
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="concern" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Addressing a Concern
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-kid-purple to-kid-blue text-white py-2 px-4 rounded-lg font-medium text-lg"
              >
                <Shield className="mr-2 h-5 w-5" /> Generate Helper Results
              </Button>
            </form>
          </Form>
          
          {result && (
            <div className="mt-8 p-6 bg-kid-purple-light/20 rounded-lg border border-kid-purple-light">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-kid-purple" />
                Your Personalized Guidance
              </h3>
              <p className="text-gray-700">{result}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ParentHelper;
