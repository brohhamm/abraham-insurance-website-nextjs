import { NextResponse } from "next/server";
const required=["firstName","lastName","phone","email","contactMethod","city","zip","insuranceType","description","consent"] as const;
export async function POST(request:Request){
  try{const data=await request.json() as Record<string,string>; if(data.website) return NextResponse.json({ok:true});
    for(const field of required){if(!data[field]?.trim()) return NextResponse.json({error:`Missing required field: ${field}`},{status:400});}
    if(!/^\S+@\S+\.\S+$/.test(data.email)) return NextResponse.json({error:"Please enter a valid email address."},{status:400});
    const apiKey=process.env.RESEND_API_KEY, to=process.env.QUOTE_NOTIFICATION_EMAIL, from=process.env.QUOTE_FROM_EMAIL;
    if(!apiKey||!to||!from) return NextResponse.json({error:"The quote form is not configured yet. Please call 714-388-9533 or email Abraham.aduran@farmersagency.com."},{status:503});
    const labels:Record<string,string>={firstName:"First name",lastName:"Last name",phone:"Phone",email:"Email",contactMethod:"Preferred contact",city:"City",zip:"ZIP",insuranceType:"Insurance type",currentCarrier:"Current carrier",effectiveDate:"Desired effective date",description:"Request details"};
    const text=Object.entries(labels).map(([key,label])=>`${label}: ${data[key]||"Not provided"}`).join("\n");
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:data.email,subject:`New ${data.insuranceType} request from ${data.firstName} ${data.lastName}`,text})});
    if(!response.ok){console.error("Resend delivery failed",response.status); return NextResponse.json({error:"Your request could not be delivered. Please call 714-388-9533."},{status:502});}
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:"The request could not be processed. Please check the form and try again."},{status:400});}
}
