const flows={
starting:["Battery voltage","Check starter/relay control","Verify engine cranking speed","Check ignition power","Check fuel-pump operation"],
spark:["Check coil power","Check coil negative switching","Test coil output","Check distributor/rotor","Verify timing reference"],
fuel:["Listen for fuel-pump prime","Check fuel-pump relay","Check pump power/ground","Verify fuel pressure","Check injector control"],
relay:["Identify relay terminals","Test constant power","Test switched power","Test control circuit","Confirm output voltage"]
};
const vehicles=[
"1987–1997 Ford OBS trucks",
"1994 F-250 7.5L / 460 V8",
"F-Series electrical diagnostics",
"Starting and charging systems",
"Fuel and ignition systems",
"E4OD transmission diagnostics"
];
let current=0, active=[];
function openFlow(name){
 active=flows[name];current=0;
 renderFlow(name);
}
function renderFlow(name){
 const box=document.getElementById("flowText");
 const buttons=document.getElementById("flowButtons");
 if(!active.length){box.textContent="Choose a workflow.";buttons.innerHTML="";return}
 box.textContent="Step "+(current+1)+" of "+active.length+": "+active[current];
 buttons.innerHTML=`<div class="step">
 <button onclick="nextStep('Pass')">PASS</button>
 <button onclick="nextStep('Fail')">FAIL</button>
 <button onclick="nextStep('Skip')">SKIP</button>
 </div>`;
}
function nextStep(result){
 const text=active[current];
 current++;
 if(current<active.length){
   document.getElementById("flowText").textContent=result+" — next test: "+active[current];
   renderFlow();
 }else{
   document.getElementById("flowText").textContent="Workflow complete. Last result: "+result;
   document.getElementById("flowButtons").innerHTML='<div class="step">Record your findings in Repair Notes.</div>';
 }
}
function searchData(){
 const q=document.getElementById("search").value.toLowerCase();
 const hits=vehicles.filter(x=>x.toLowerCase().includes(q));
 document.getElementById("results").innerHTML=hits.map(x=>`<div class="result">${x}</div>`).join("");
}
function saveNotes(){
 localStorage.setItem("fordfix_notes",document.getElementById("notes").value);
 document.getElementById("saved").textContent="Notes saved on this device.";
}
document.getElementById("notes").value=localStorage.getItem("fordfix_notes")||"";
searchData();
