"use strict";
// Cada alternativa tiene su propio comentario. Las respuestas permanecen en memoria.
const questions = [
  {title:"¿Cuánto tiempo ha pasado desde la ruptura?", hint:"Elige la opción que mejor describe tu situación.",options:[
    ["Menos de una semana","Todo está muy reciente. Antes de buscar la frase perfecta, baja la intensidad del momento y date espacio para ordenar lo ocurrido."],
    ["Entre una semana y un mes","Quizá ya pasó el primer impacto, pero todavía puede haber urgencia por resolverlo todo. El tiempo por sí solo no sustituye un cambio concreto."],
    ["Entre uno y tres meses","La distancia permite observar lo ocurrido con otra perspectiva. Revisa qué cambió de verdad antes de repetir la misma conversación."],
    ["Más de tres meses","Lo que existió importa, pero tu próximo paso necesita apoyarse en el presente: tu estabilidad y la apertura actual de la otra persona."]]},
  {title:"¿Cómo es el contacto entre ustedes hoy?",hint:"Piensa en hechos, no en lo que te gustaría que significaran.",options:[
    ["Hablamos y ambos iniciamos conversaciones","La iniciativa de ambos es un dato útil. Aun así, conversar no confirma una intención de volver: observa constancia y evita acelerar las cosas."],
    ["Responde, pero casi siempre escribo yo","Recibir una respuesta no equivale a una apertura sostenida. Mira si también existe iniciativa del otro lado antes de aumentar el contacto."],
    ["No hablamos, pero no me pidió distancia","El silencio deja preguntas abiertas. No lo conviertas automáticamente en rechazo ni en una invitación: primero revisa tu motivo y el contexto."],
    ["Me pidió que no le escriba o me bloqueó","Ese límite merece respeto. Ahora tu siguiente paso es recuperar tu estabilidad sin insistir ni buscar otras formas de llegar a esa persona."]]},
  {title:"¿Qué haces cuando sientes ganas de escribirle?",hint:"Responde según lo que suele pasar, no según tu mejor día.",options:[
    ["Escribo de inmediato y después me arrepiento","Tu prioridad es crear una pausa entre sentir y actuar. La regla de las 24 horas del Mapa está pensada para interrumpir ese impulso antes de convertirlo en una decisión."],
    ["Reviso sus redes o releo nuestras conversaciones","Buscar señales puede mantenerte pendiente de una respuesta. Reducir esos disparadores ayuda a recuperar atención para tu propia vida."],
    ["Escribo un borrador, pero espero antes de enviarlo","Ya estás creando una pausa útil. El siguiente paso es revisar si el mensaje nace de la calma, tiene un motivo natural y respeta el contexto."],
    ["Puedo seguir con mi día sin escribirle","Esa capacidad de sostener tu rutina es una buena base. Cuidarla te permite decidir sin hacer depender tu día de una respuesta."]]},
  {title:"¿Qué tienes claro sobre lo que llevó a la ruptura?",hint:"Entender el patrón importa más que encontrar a alguien a quien culpar.",options:[
    ["Todavía no entiendo bien qué pasó","Sin entender lo ocurrido, es fácil intentar volver al mismo punto. Empieza por distinguir hechos, conflictos repetidos y lo que estaba fuera de tu control."],
    ["Reconozco errores míos, pero no sé cómo cambiarlos","Reconocer errores es un inicio. Lo que puede marcar una diferencia son cambios observables, sostenidos y que no exijan una segunda oportunidad como recompensa."],
    ["Veo un patrón de discusiones, presión o distancia","Identificar el ciclo permite dejar de repetirlo. El Mapa aborda patrones de apego y responsabilidad sin etiquetar ni diagnosticar a tu expareja."],
    ["Entiendo el problema y ya estoy haciendo cambios","Ahora importa sostener esos cambios por ti. Explicarlos una y otra vez no sustituye vivirlos ni garantiza que la otra persona quiera retomar la relación."]]},
  {title:"¿Qué apertura observas de su parte?",hint:"Una historia vista o un “me gusta” no confirma ganas de volver.",options:[
    ["Busca conversar y mantiene el interés","Hay una señal de reciprocidad para observar con calma. Una conversación ligera y sin exigencias necesita más criterio que una declaración apresurada."],
    ["A veces se acerca y otras veces desaparece","Las señales intermitentes pueden confundirte. Antes de avanzar, observa consistencia y evita construir una expectativa a partir de un solo acercamiento."],
    ["Solo veo señales en redes, nada directo","Las redes ofrecen información incompleta. Una visualización o reacción no sustituye una apertura directa ni una conversación recíproca."],
    ["Me dijo claramente que no quiere volver","Toma esa respuesta en serio. Recuperar tu centro también incluye aceptar una decisión que no puedes controlar y construir una vida que no quede en espera."]]},
  {title:"¿Cómo está tu vida fuera de esta relación?",hint:"Tu rutina también forma parte de tu próximo paso.",options:[
    ["Me cuesta sostener mi rutina y pienso en esto todo el día","Antes de decidir sobre el contacto, vuelve a lo básico: una rutina mínima, movimiento y conexión con personas de confianza. No necesitas resolver toda tu vida hoy."],
    ["Cumplo mis tareas, pero sigo muy pendiente del teléfono","Funcionas, pero parte de tu atención sigue atada a esa respuesta. Reducir disparadores y retomar algo propio puede darte más espacio para decidir."],
    ["Estoy retomando mis actividades y mi vida social","Esa reconstrucción merece continuidad. No la conviertas en una actuación para provocar una reacción: es parte de recuperar una vida propia."],
    ["Tengo una rutina estable y metas propias","Una vida con dirección te permite evaluar la relación con más perspectiva. Mantén esa base aunque el resultado de una reconexión sea incierto."]]},
  {title:"¿Qué necesitas para dar tu próximo paso?",hint:"Esta respuesta ayudará a conectar el método con tu prioridad.",options:[
    ["Dejar de actuar por impulso","Tu punto de entrada son la pausa, los disparadores y la regla de las 24 horas. Primero recupera margen para elegir qué hacer."],
    ["Saber si conviene contactar, esperar o soltar","Tu prioridad es un criterio de decisión: estabilidad, contexto y reciprocidad. El Mapa reúne herramientas para revisar esas tres piezas."],
    ["Reconocer mis errores y acercarme de otra manera","Responsabilidad y comunicación van juntas. Un acercamiento distinto empieza con cambios concretos y respeto por la respuesta de la otra persona."],
    ["Seguir un plan concreto para reconstruirme","El plan de 30 días organiza acciones para recuperar tu centro, reconstruir tu vida, entender el patrón y evaluar tu siguiente paso."]]}
];
const profiles = {
  limits:{title:"Tu próximo paso empieza por respetar el límite.",description:"Has indicado una petición de distancia o un rechazo claro. Este quiz no puede convertir esa respuesta en una oportunidad de reconquista. Lo que sí puedes trabajar es tu estabilidad y tu vida fuera de la relación.",action:"No insistas. Empieza por la reconstrucción interna.",bridge:"Para tu situación, la parte más relevante del Mapa es la reconquista interna y el plan de reconstrucción personal. El producto no cambia la decisión de tu expareja."},
  pause:{title:"Antes de acercarte, recupera tu centro.",description:"En tus respuestas aparecen impulsos o dificultades para sostener tu rutina. Eso no define quién eres; señala un punto de partida: crear espacio entre lo que sientes y lo que decides hacer.",action:"Haz una pausa y reconstruye una rutina que puedas sostener.",bridge:"Tu punto de entrada al Mapa es el trabajo interno: reducir disparadores, aplicar la regla de las 24 horas y seguir las primeras acciones del plan de 30 días."},
  clarity:{title:"Necesitas claridad antes de dar otro paso.",description:"La apertura que describes todavía es incierta o poco consistente. Un silencio, una respuesta breve o una señal en redes no permite saber qué siente la otra persona. Conviene revisar el contexto sin llenar los vacíos con expectativas.",action:"Distingue hechos de señales ambiguas antes de decidir.",bridge:"Para ti, los diagnósticos, el checklist antes de contactar y la herramienta «contactar, esperar o soltar» son el puente entre tus dudas y una decisión con más criterio."},
  reciprocity:{title:"Hay conversación. Tu siguiente paso necesita criterio.",description:"Describes iniciativa de ambos y una base personal que estás recuperando o sosteniendo. Es un contexto que puedes evaluar con calma, sin asumir que confirma un deseo de retomar la relación.",action:"Observa reciprocidad sostenida y avanza sin presión.",bridge:"Tu prioridad dentro del Mapa puede ser la comunicación ligera, la responsabilidad y el checklist de reaproximación. La calma y la reciprocidad siguen siendo parte del proceso."}
};
function getProfile(answers){
  if(answers[1]===3||answers[4]===3) return "limits";
  if(answers[2]===0||answers[5]===0||(answers[2]===1&&answers[5]===1)) return "pause";
  if(answers[1]===0&&answers[4]===0&&answers[2]>=2&&answers[5]>=2) return "reciprocity";
  return "clarity";
}
let current=0;
let answers=Array(questions.length).fill(null);
const byId=id=>document.getElementById(id);
function renderQuestion(focus=false){
  const q=questions[current];
  byId("question").textContent=q.title;
  byId("hint").textContent=q.hint;
  byId("step-label").textContent=`PREGUNTA ${String(current+1).padStart(2,"0")} / 07`;
  const completed=answers.filter(a=>a!==null).length;
  byId("progress").value=completed;
  byId("progress-label").textContent=`${Math.round(completed/questions.length*100)}% completado`;
  byId("choices").replaceChildren();
  const legend=document.createElement("legend");legend.className="sr-only";legend.textContent="Selecciona una respuesta";byId("choices").append(legend);
  q.options.forEach((option,index)=>{
    const label=document.createElement("label");label.className="choice";
    const input=document.createElement("input");input.type="radio";input.name="answer";input.value=String(index);input.checked=answers[current]===index;
    input.addEventListener("change",()=>{answers[current]=index;showFeedback();});
    const text=document.createElement("span");text.textContent=option[0];label.append(input,text);byId("choices").append(label);
  });
  byId("back").hidden=current===0;
  byId("next").textContent=current===questions.length-1?"Ver mi resultado y el plan":"Continuar";
  showFeedback();if(focus)byId("question").focus();
}
function showFeedback(){
  const selected=answers[current];
  byId("feedback").hidden=selected===null;
  byId("next").disabled=selected===null;
  byId("feedback-text").textContent=selected===null?"":questions[current].options[selected][1];
  const count=answers.filter(a=>a!==null).length;byId("progress").value=count;byId("progress-label").textContent=`${Math.round(count/7*100)}% completado`;
}
function showResult(){
  if(answers.some(a=>a===null))return;
  const profile=profiles[getProfile(answers)];
  byId("result-title").textContent=profile.title;byId("result-description").textContent=profile.description;byId("result-action").textContent=profile.action;byId("offer-bridge").textContent=profile.bridge;
  byId("answer-summary").replaceChildren();
  [1,5,6].forEach(i=>{const p=document.createElement("p");const strong=document.createElement("strong");strong.textContent=questions[i].options[answers[i]][0]+". ";const span=document.createElement("span");span.textContent=questions[i].options[answers[i]][1];p.append(strong,span);byId("answer-summary").append(p);});
  byId("quiz").hidden=true;byId("result").hidden=false;window.scrollTo(0,0);byId("result-title").focus();
}
byId("next").addEventListener("click",()=>{if(answers[current]===null)return;if(current===questions.length-1)showResult();else{current++;renderQuestion(true);}});
byId("back").addEventListener("click",()=>{if(current>0){current--;renderQuestion(true);}});
byId("restart").addEventListener("click",()=>{answers=Array(questions.length).fill(null);current=0;byId("result").hidden=true;byId("quiz").hidden=false;window.scrollTo(0,0);renderQuestion(true);});
renderQuestion();
