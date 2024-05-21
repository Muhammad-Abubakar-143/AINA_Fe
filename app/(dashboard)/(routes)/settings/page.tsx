import { SubscriptionButton } from '@/components/subscription-button';
import { checkSubscription } from '@/lib/subscription'
import { cn } from '@/lib/utils';
import {Settings } from "lucide-react";
import React from 'react'

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className='h-screen'>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md bg-gray-700/10")}>
          <Settings className={cn("w-10 h-10 text-gray-700")} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage account settings.
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-8 space-y-4">
         <div className="text-muted-foreground text-sm">
           {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
         </div>
         <SubscriptionButton isPro={isPro} />
       </div>
    </div>
  )
}

export default SettingsPage



// 'use client;'
// import { Settings } from "lucide-react";

// import { DashboardHeading, Heading } from "@/components/heading";
// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";

// const SettingsPage = async () => {
//   // const isPro = await checkSubscription();

//   return ( 
//     <div>
//       <DashboardHeading
//         title="Settings"
//         description="Manage account settings."
//         icon={Settings}
//         iconColor="text-gray-700"
//         bgColor="bg-gray-700/10"
//       />
//       <div className="px-4 lg:px-8 space-y-4">
//         <div className="text-muted-foreground text-sm">
//           {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
//         </div>
//         <SubscriptionButton isPro={isPro} />
//       </div>
//     </div>
//    );
// }
 
// export default SettingsPage;

