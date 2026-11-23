export function ServiceHelp({locale}:{locale:"en"|"es"}){
  const es=locale==="es";
  const items=es?[
    {id:"billing",q:"¿Cómo recibo ayuda con una factura o un pago?",a:"Rashel y Suzee le ayudan a entender el cobro, revisar opciones de pago y comunicarse con la aseguradora. Si se acerca una fecha límite o recibió un aviso, llame al 951-653-8888. Use un canal autorizado para pagar; no incluya datos de tarjeta o banco en este formulario."},
    {id:"documents",q:"¿Cómo solicito tarjetas o un comprobante de seguro?",a:"Díganos qué documento necesita y para quién es. Podemos ayudar con tarjetas de auto, documentos de póliza y comprobantes para su prestamista. Si un contrato pide agregar a otra persona como asegurada, revisamos esa solicitud por separado; una constancia no modifica la póliza."},
    {id:"policyservice",q:"¿Cómo agrego un auto o conductor, o solicito un cambio?",a:"Comparta el cambio y la fecha que solicita. Nuestro equipo revisará la información necesaria y le confirmará qué se ha realizado. Preparar un mensaje no modifica la cobertura. Para cambios urgentes o cancelaciones, llame directamente a la agencia."},
  ]:[
    {id:"billing",q:"How do I get help with a bill or payment?",a:"Rashel and Suzee help explain charges, review payment options, and connect with the insurer. If a deadline is close or you received a notice, call 951-653-8888. Use an authorized payment channel; please keep card and bank details out of this form."},
    {id:"documents",q:"How do I request insurance ID cards or proof of insurance?",a:"Tell us which document you need and who needs it. We help with auto ID cards, policy documents, and insurance evidence for your lender. A contract asking to add another insured needs a separate review; a certificate does not itself change the policy."},
    {id:"policyservice",q:"How do I add a car or driver, or request a policy change?",a:"Tell us what is changing and the date you are requesting. Our team will review the information needed and confirm what has been completed. Preparing a message does not change coverage. Please call the agency directly for urgent changes or cancellation requests."},
  ];
  return <div className="faq-list">{items.map(x=><details key={x.id} id={x.id}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div>;
}
