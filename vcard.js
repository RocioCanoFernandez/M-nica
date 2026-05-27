function generateVCard() {
  const hubUrl = window.location.href;
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Durán;Mónica;;;
FN:Mónica Durán
ORG:MDHOUSE
TITLE:Agente inmobiliario
TEL;TYPE=WORK,VOICE:654078408
TEL;TYPE=CELL,VOICE:654078408
EMAIL;TYPE=WORK,INTERNET:monica72.duran@gmail.com
URL:https://www.mdhouse.es
URL;TYPE=HUB:${hubUrl}
X-SOCIALPROFILE;TYPE=facebook:https://www.facebook.com/profile.php?id=100087856822337
NOTE:Servicios inmobiliarios integrales, reformas, decoración y cocinas a medida.
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Monica_Duran_MDHOUSE.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
