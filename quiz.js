"use strict";
// Reglas editoriales; no calculan probabilidades ni diagnósticos clínicos.
const questions=[
{title:"¿Qué te gustaría aclarar primero?",hint:"Empecemos por lo que buscas entender.",options:[
["Si tiene sentido volver a conversar.","Tu lectura tendrá en cuenta esa decisión, sin dar por hecho que contactar sea el siguiente paso."],
["Cómo dejar de actuar por impulso.","Observaremos el espacio que tienes entre sentir ganas de escribir y decidir hacerlo."],
["Qué debería cambiar antes de acercarme.","Distinguiremos entre reconocer lo ocurrido y sostener cambios concretos."],
["Cómo seguir adelante sin quedarme esperando.","Tu lectura priorizará recuperar dirección en tu propia vida."]]},
{title:"¿Cuánto tiempo ha pasado desde la ruptura?",hint:"El tiempo sitúa el momento; no determina posibilidades de volver.",options:[
["Menos de una semana.","Lo que compartas describe un momento reciente, no una situación definitiva."],
["Entre una semana y un mes.","Además del tiempo transcurrido, importa cómo estás actuando hoy."],
["Entre uno y tres meses.","La distancia puede aportar perspectiva, pero también necesitas hechos actuales."],
["Más de tres meses.","El tiempo por sí solo no confirma apertura. Miraremos el presente."]]},
{title:"¿Cómo es el contacto actualmente?",hint:"Elige lo que ocurre hoy, aunque sea distinto de lo que esperas.",options:[
["Ambos iniciamos conversaciones.","La iniciativa de ambos es un dato útil, sin asumir qué significa para la relación."],
["Hablamos, pero casi siempre inicio yo.","Responder e iniciar son cosas diferentes. Tu lectura distinguirá esa diferencia."],
["No hablamos y no hay una petición explícita de distancia.","La ausencia de contacto no demuestra por sí sola rechazo ni apertura."],
["Me pidió que no le contacte.","Una petición de no contactar es un límite concreto que conviene respetar."],
["Me bloqueó.","Tu resultado no recomendará buscar otras vías para llegar a esa persona."]]},
{title:"¿Qué sabes sobre su disposición a retomar la relación?",hint:"Una conversación y una intención de volver no son lo mismo.",options:[
["Ha dicho que estaría dispuesto/a a hablar de esa posibilidad.","Hay disposición declarada a hablar, no una decisión de volver."],
["Seguimos conversando, pero no hemos hablado de volver.","Existe contacto directo, pero la intención de retomar la relación sigue sin aclararse."],
["Solo tengo señales indirectas, como actividad en redes.","Las señales indirectas no permiten concluir una intención."],
["No tengo información reciente.","No tener información es una respuesta válida. Reconoceremos esa incertidumbre."],
["Ha dicho claramente que no quiere retomar la relación.","Seguir conversando, si ocurre, no convierte esa negativa en un deseo de volver."]]},
{title:"Cuando aparece la intención de escribir, ¿qué suele pasar?",hint:"Piensa en lo habitual, no solo en tu mejor día.",options:[
["Envío el mensaje antes de pensarlo bien.","Aquí aparece poco margen entre intención y acción. Crear una pausa puede ser una prioridad."],
["Paso bastante tiempo revisando redes o conversaciones.","Revisar una y otra vez puede mantener tu atención pendiente del contacto."],
["Escribo un borrador y puedo esperar antes de enviarlo.","Ya tienes una pausa que puedes aprovechar para revisar el motivo y el contexto."],
["Puedo dejar pasar la intención y continuar con mi día.","Puedes sostener tu día sin convertir cada intención en un mensaje."]]},
{title:"¿Cómo está tu rutina estos días?",hint:"Tu vida fuera del contacto también importa.",options:[
["Me cuesta sostener tareas básicas o compromisos.","Recuperar una parte pequeña de tu rutina puede ser una prioridad ahora."],
["Cumplo mis tareas, pero interrumpo mucho el día para mirar el teléfono.","Tus tareas siguen, pero tu atención se interrumpe. Tendremos en cuenta ese patrón."],
["Estoy retomando actividades y contacto con otras personas.","Hay una reconstrucción en marcha que merece continuidad por su valor en tu vida."],
["Mantengo una rutina y metas propias.","Una rutina propia ofrece una base para decidir sin hacer depender el día de una respuesta."]]},
{title:"¿Qué entiendes sobre lo que ocurrió?",hint:"Reconocer un patrón y cambiarlo son pasos diferentes.",options:[
["Todavía no logro ordenar bien los motivos.","Primero puede hacer falta ordenar hechos y conflictos, sin buscar una única explicación."],
["Reconozco algunas acciones mías, pero no sé cómo cambiarlas.","El siguiente trabajo es convertir ese reconocimiento en acciones que puedas sostener."],
["Identifico situaciones que se repetían entre ambos.","Puedes elegir una situación concreta y pensar qué harías de otra manera."],
["Identifico mi parte y estoy sosteniendo cambios concretos.","Sostener cambios aporta más que anunciarlos. Su valor no depende de una segunda oportunidad."]]},
{title:"Si hoy iniciaras una conversación, ¿cuál sería el motivo principal?",hint:"Puedes elegir no iniciar contacto.",options:[
["Obtener una respuesta para sentir alivio.","Buscar alivio es comprensible, pero una respuesta breve puede dejar nuevas dudas."],
["Explicar todo y convencerle de volver.","Conviene revisar ese propósito: una conversación no debe convertirse en presión contra una negativa."],
["Hablar de un asunto concreto, sin intentar resolver toda la relación.","Un motivo concreto evita cargar una conversación con todas las expectativas."],
["Hoy prefiero no iniciar contacto y enfocarme en mi vida.","Esa decisión también tiene lugar aquí. Tu primer paso puede centrarse en tu vida cotidiana."]]}
];
const profiles={
limits:{title:"Un límite que conviene respetar",consequence:"Insistir en cambiar esa respuesta podría aumentar la distancia o mantener tu atención atada a una decisión que no depende de ti.",bridge:"La parte del Mapa más pertinente para esta situación es la reconstrucción interna: rutina, disparadores y acciones para recuperar dirección. El plan de 30 días ofrece una estructura para trabajar ese proceso."},
pause:{title:"La urgencia está guiando parte de tus decisiones",consequence:"Esa combinación puede hacer que el contacto se convierta en una búsqueda de alivio inmediato y que después aparezcan nuevas dudas.",bridge:"El Mapa incluye la regla de las 24 horas, herramientas para reducir disparadores y un plan de reconstrucción. Son los recursos más relacionados con la pausa y la rutina que tus respuestas señalan como prioridad."},
clarity:{title:"Falta claridad para decidir sobre el contacto",consequence:"Interpretar información incompleta como una intención de reconectar podría llevarte a actuar desde expectativas que todavía no están confirmadas.",bridge:"Para ordenar esa decisión, el Mapa reúne diagnósticos, un checklist antes de contactar y la herramienta «Contactar, Esperar o Soltar». Su función es ayudarte a revisar criterios, sin adivinar lo que siente la otra persona."},
reciprocity:{title:"Hay contacto mutuo que puedes evaluar con calma",consequence:"Acelerar una definición podría añadir presión al contacto, incluso cuando ambos mantienen conversaciones.",bridge:"En este contexto, las herramientas de comunicación, responsabilidad y reaproximación del Mapa son las más pertinentes. El método propone preparar el acercamiento y evaluar reciprocidad antes de avanzar."}
};
function pauseScore(a){return [3,2,1,0][a[4]]+[3,2,1,0][a[5]]+[2,2,0,0][a[7]];}
function getProfile(a){if(a[2]>=3||a[3]===4)return "limits";if(pauseScore(a)>=4)return "pause";if(a[2]===0&&a[3]<=1)return "reciprocity";return "clarity";}
function buildReading(a){
const key=getProfile(a),p=profiles[key];
const contact=["ambos inician conversaciones","casi siempre inicias tú las conversaciones","no hay contacto actual","te pidió que no le contactes","te bloqueó"][a[2]];
const openness=["ha dicho que estaría dispuesto/a a hablar de una posible vuelta","conversan sin haber hablado de volver","solo tienes señales indirectas","no tienes información reciente","ha dicho que no quiere retomar la relación"][a[3]];
const impulse=["envías mensajes antes de pensarlos bien","dedicas bastante tiempo a revisar redes o conversaciones","puedes esperar después de escribir un borrador","puedes continuar tu día sin escribir"][a[4]];
const routine=["te cuesta sostener tareas básicas","interrumpes tus tareas para mirar el teléfono","estás retomando actividades y contacto con otras personas","mantienes una rutina y metas propias"][a[5]];
const motive=["buscas una respuesta para sentir alivio","quieres explicar todo y convencerle de volver","tienes un asunto concreto que conversar","hoy prefieres no iniciar contacto"][a[7]];
const context=["Como la ruptura es reciente, esta lectura describe el momento que compartiste hoy; no una situación definitiva.","Estás en las primeras semanas. El tiempo sitúa lo ocurrido, pero tus decisiones necesitan apoyarse en el contexto actual.","El tiempo transcurrido puede aportar perspectiva, pero no sustituye información actual sobre el contacto y la disposición.","Después de varios meses, conviene mirar el presente: el tiempo transcurrido no confirma por sí solo una apertura."][a[1]];
const understanding=["Señalaste que aún necesitas ordenar lo ocurrido. Comprenderlo puede ser tu trabajo previo a cualquier acercamiento.","Tu siguiente tarea es convertir lo que reconoces en una acción concreta que puedas sostener.","Conviene elegir una situación repetida y definir qué harías de otra manera.","Sostén esos cambios por su valor en tu vida, sin hacerlos depender de una segunda oportunidad."][a[6]];
const goalActions=["Antes de decidir si contactar, anota qué hechos muestran iniciativa de ambos y cuáles son interpretaciones tuyas.","Guarda cualquier mensaje como borrador y date una pausa antes de decidir; completa una tarea concreta sin revisar el contacto durante esa actividad.","Elige una acción tuya que quieras cambiar y define una alternativa concreta que puedas practicar hoy.","Elige una actividad propia y reserva un momento del día para realizarla sin revisar el contacto."];
let intro,priority,action,bridge=p.bridge,evidence;
if(key==="limits"){
intro=`Nos contaste que ${contact} y que ${openness}.`;
priority=a[2]>=3?"Tu prioridad es respetar ese límite de contacto y recuperar dirección en tu propia vida.":"Tu prioridad es dejar de buscar una vuelta que ha rechazado y recuperar dirección en tu propia vida.";
action=a[2]>=3?"Respeta la distancia y evita buscar otras vías de contacto; retoma hoy una actividad propia.":"Si siguen conversando, evita utilizar esas conversaciones para negociar una vuelta; retoma hoy una actividad propia.";evidence=[2,3];
}else if(key==="pause"){
const signals=[];if(a[4]<=1)signals.push(impulse);if(a[5]<=1)signals.push(routine);if(a[7]<=1)signals.push(motive);
intro=`En tus respuestas señalaste que ${signals.join(" y que ")}.`;priority="Tu primer paso es crear una pausa antes de decidir qué enviar y recuperar una parte de tu rutina.";action=goalActions[1];evidence=[4,5,7];
}else if(key==="clarity"){
intro=`Nos contaste que ${contact} y que ${openness}.`;priority="Tu prioridad es separar hechos, interpretaciones y límites antes de elegir si contactar, esperar o soltar.";action="Escribe dos listas: hechos observados e interpretaciones propias. Comprueba si existe un motivo concreto para contactar.";evidence=[2,3];
}else{
intro=`Dices que ${contact} y que ${openness}.`;priority="Tu siguiente paso es observar la constancia y cuidar el propósito de cada conversación; el contacto no confirma una decisión de volver.";action="Antes de escribir, elige un asunto concreto y revisa si puedes conversar sin exigir una definición sobre la relación.";evidence=[2,3,5];
}
if(a[0]===3||a[7]===3){if(key!=="limits")action=goalActions[3];bridge="Como señalaste que quieres enfocarte en tu vida, el punto de entrada al Mapa es la reconstrucción interna y el plan de 30 días. Puedes trabajar esa prioridad sin iniciar contacto.";}
const motiveNote=`Sobre tu reacción: ${impulse}. `+["Señalaste que buscas alivio mediante una respuesta. Revisa si puedes posponer esa búsqueda antes de decidir sobre el contacto.","También quieres convencerle de volver. Conviene separar expresar lo que piensas de intentar cambiar una decisión mediante presión.","Un asunto concreto no anula un límite explícito ni obliga a la otra persona a responder.","Hoy elegiste no iniciar contacto. Tu acción propuesta respeta esa decisión."][a[7]];
const contradiction=a[2]===2&&a[3]===1?"Aunque marcaste que no hablan actualmente, también elegiste que siguen conversando. No asumimos un contacto activo: revisa cuál describe mejor el presente.":a[2]>=3&&a[3]===0?"Una disposición a hablar de volver no anula una petición de distancia o un bloqueo actual. Esta lectura prioriza el límite que declaraste.":a[2]===0&&a[3]===4?"Aunque ambos conversan, también nos dijiste que no quiere volver. Mantener contacto no equivale a querer retomar la relación.":"";
const priorityGoal=a[0]===3||a[7]===3?"Enfocarte en tu vida y recuperar dirección propia.":questions[0].options[a[0]][0];
return {key,title:p.title,description:`${intro} ${p.consequence} ${priority}`,action,bridge,evidence:evidence.map(i=>({label:["Tu prioridad","Tiempo transcurrido","Contacto actual","Disposición declarada","Reacción al contacto","Tu rutina","Comprensión","Motivo para escribir"][i],text:questions[i].options[a[i]][0]})),context,understanding,motiveNote,contradiction,priorityGoal,goalAction:goalActions[a[0]]};
}

// Presentación del resultado: conserva clasificación, puntuación y preguntas.
function resultPresentation(a,r){
 const copy={
 limits:{title:a[2]>=3?"Buscar contacto ahora puede aumentar la distancia.":"Seguir conversando no cambia una negativa a volver.",description:a[2]>=3?"Marcaste una petición de no contactar o un bloqueo. Ese límite pesa más que cualquier señal ambigua o expectativa de volver.":"Marcaste que no quiere retomar la relación. Si siguen conversando, ese contacto no equivale a una intención de reconciliarse.",error:a[2]>=3?"Interpretar una señal como permiso para insistir o buscar otra vía de contacto.":"Usar cada conversación para intentar negociar una vuelta que ya ha rechazado.",bridge:"En este escenario, el Mapa distingue entre límites, contacto y expectativas. Su trabajo interno ayuda a ordenar decisiones propias; no convierte una negativa en una oportunidad."},
 pause:{title:"Otro mensaje puede prolongar la misma incertidumbre.",description:"La combinación de tus respuestas indica poco margen entre lo que sientes y lo que haces con el contacto. Buscar una respuesta para resolver esa tensión puede dejarte pendiente de la siguiente conversación.",error:"Usar un mensaje para obtener alivio inmediato, sin revisar el propósito ni el contexto.",bridge:"Para este patrón, el Mapa reúne la regla de las 24 horas, el trabajo sobre disparadores y criterios antes de contactar. Organiza qué revisar antes de convertir una intención en otro mensaje."},
 clarity:{title:a[2]===1?"Una respuesta no demuestra interés en volver.":a[3]===2?"Las señales en redes no confirman una intención de volver.":"Decidir con información incompleta puede añadir más confusión.",description:"Tus respuestas no describen a la vez iniciativa mutua y apertura directa para hablar de la relación. El punto pendiente es distinguir el contacto que existe de la intención que todavía no puedes confirmar.",error:"Tratar una respuesta ocasional, el silencio o una señal indirecta como prueba de que conviene avanzar.",bridge:"Para esta situación, el Mapa conecta el diagnóstico con el checklist antes de contactar y la herramienta «Contactar, Esperar o Soltar». El método ordena los criterios que faltan antes de decidir."},
 reciprocity:{title:a[3]===0?"Hablar de volver no significa que la decisión esté tomada.":"Hay contacto mutuo. Acelerar una definición puede añadir presión.",description:a[3]===0?"Marcaste iniciativa de ambos y disposición a hablar de una posible vuelta. Es una apertura a conversar, no una confirmación de reconciliación.":"Marcaste iniciativa de ambos, pero no una conversación sobre volver. El contacto es un hecho; el significado que le das todavía requiere criterio.",error:"Confundir apertura al diálogo con una decisión de volver y exigir una definición antes de tiempo.",bridge:"En este contexto, el Mapa organiza responsabilidad, comunicación y reaproximación. Sus herramientas ayudan a evaluar el propósito y la reciprocidad de los siguientes pasos."}
 };
 const out={...copy[r.key],evidence:[...r.evidence]};
 if(r.key==='pause'){out.description='Tus respuestas señalan: '+r.evidence.filter((_,i)=>i===0||i===2).map(e=>e.text.replace(/\.$/,'').toLowerCase()).join('; ')+'. '+profiles.pause.consequence;}
 if(a[0]===3||a[7]===3){out.description+=' También elegiste seguir adelante o no iniciar contacto.';out.error='Mantener tu vida en espera de una respuesta, aunque has elegido enfocarte en ella.';out.bridge='Como elegiste enfocarte en tu vida, el punto de entrada al Mapa es su trabajo interno y el plan de 30 días. La presentación respeta esa elección y no te propone iniciar contacto.';}
 if(out.evidence.length<4)out.evidence.push({label:'Lo que falta comprender',text:questions[6].options[a[6]][0]});
 return out;
}

let current=0;
let answers=Array(questions.length).fill(null);
const byId=id=>document.getElementById(id);
function renderQuestion(focus=false){const q=questions[current];byId("question").textContent=q.title;byId("hint").textContent=q.hint;byId("step-label").textContent=`PREGUNTA ${String(current+1).padStart(2,"0")} / 08`;byId("choices").replaceChildren();const legend=document.createElement("legend");legend.className="sr-only";legend.textContent="Selecciona una respuesta";byId("choices").append(legend);q.options.forEach((option,index)=>{const label=document.createElement("label");label.className="choice";const input=document.createElement("input");input.type="radio";input.name="answer";input.value=String(index);input.checked=answers[current]===index;input.addEventListener("change",()=>{answers[current]=index;showFeedback();});const text=document.createElement("span");text.textContent=option[0];label.append(input,text);byId("choices").append(label);});byId("back").hidden=current===0;byId("next").textContent=current===questions.length-1?"Ver mi lectura personalizada":"Continuar";showFeedback();if(focus)byId("question").focus();}
function showFeedback(){const selected=answers[current];byId("feedback").hidden=selected===null;byId("next").disabled=selected===null;byId("feedback-text").textContent=selected===null?"":questions[current].options[selected][1];const count=answers.filter(a=>a!==null).length;byId("progress").value=count;byId("progress-label").textContent=`${Math.round(count/questions.length*100)}% completado`;}
function showResult(){
 if(answers.some(a=>a===null))return;
 const r=buildReading(answers),view=resultPresentation(answers,r);
 byId("result-title").textContent=view.title;byId("result-description").textContent=view.description;byId("result-error").textContent=view.error;byId("offer-bridge").textContent=view.bridge;
 byId("answer-summary").replaceChildren();view.evidence.forEach(item=>{const li=document.createElement("li"),strong=document.createElement("strong"),span=document.createElement("span");strong.textContent=item.label+": ";span.textContent=item.text;li.append(strong,span);byId("answer-summary").append(li);});
 byId("result-contradiction").textContent=r.contradiction;byId("result-contradiction").hidden=!r.contradiction;
 byId("quiz").hidden=true;byId("result").hidden=false;byId("offer-content").hidden=false;window.scrollTo(0,0);byId("result-title").focus();
}
byId("next").addEventListener("click",()=>{if(answers[current]===null)return;if(current===questions.length-1)showResult();else{current++;renderQuestion(true);}});
byId("back").addEventListener("click",()=>{if(current>0){current--;renderQuestion(true);}});
function restart(){answers=Array(questions.length).fill(null);current=0;byId("result").hidden=true;byId("offer-content").hidden=true;byId("quiz").hidden=false;window.scrollTo(0,0);renderQuestion(true);}
byId("restart").addEventListener("click",restart);
byId("checkout").addEventListener("click",()=>{if(typeof window.fbq==="function")window.fbq("track","InitiateCheckout");});
renderQuestion();
