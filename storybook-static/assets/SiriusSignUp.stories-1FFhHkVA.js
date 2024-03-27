import{w as S,u as s}from"./index-BASH1HpE.js";import{j as t}from"./jsx-runtime-DQ32znRX.js";import{S as f}from"./SiriusCard-eMQfMMHY.js";import{S as v}from"./SiriusTitle-VIOQOm5Z.js";import{S as P}from"./SiriusImage-qK6qLsq7.js";import{S as o}from"./SiriusTextInput-BUdSjaIA.js";import{S as I}from"./SiriusButton-BK4EF0qU.js";import{r as n}from"./index-DH5ua8nC.js";import"./index-CpCSUgdU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./AntdIcon-CaIQg0UY.js";import"./assertThisInitialized-BIGTeGEP.js";import"./index-DTjfqIwK.js";import"./useSize-D_CeqxI_.js";import"./motion-USQerLMX.js";import"./CloseOutlined-SBkUb3f2.js";import"./useCSSVarCls-D8oZ9f7F.js";import"./index-D4-dSBXZ.js";import"./index-CHvFsMmm.js";import"./index-DEk2uz3J.js";import"./zoom-CPtYufYW.js";import"./compact-item-Bu05fkAU.js";import"./TextArea-lpl4XOWO.js";import"./EyeOutlined-DrAG_w89.js";import"./button-BFCYgtay.js";const E=""+new URL("react-CHdo91hT.svg",import.meta.url).href,y=()=>{const[i,a]=n.useState(""),[l,p]=n.useState(""),[c,m]=n.useState(""),[u,h]=n.useState(""),x=()=>{alert("Sign up successful!")};return t.jsx(f,{style:{width:400},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[t.jsx(P,{src:E,height:100,width:100}),t.jsx(v,{level:2,title:"Sirius sign up"}),t.jsx(o,{placeholder:"Full name",onChange:e=>a(e.target.value)}),t.jsx(o,{placeholder:"Email",onChange:e=>p(e.target.value)}),t.jsx(o,{type:"password",placeholder:"Password",onChange:e=>m(e.target.value)}),t.jsx(o,{type:"password",placeholder:"Confirm password",onChange:e=>h(e.target.value)}),t.jsx(I,{disabled:!i||!l||!c||!u,onClick:x,children:"Sign up"})]})})};y.__docgenInfo={description:"",methods:[],displayName:"SiriusSignUp"};const X={component:y},r={play:async({canvasElement:i})=>{const a=S(i),l=a.getByPlaceholderText("Full name"),p=a.getByPlaceholderText("Email"),c=a.getByPlaceholderText("Password"),m=a.getByPlaceholderText("Confirm password");await s.type(l,"Augusto Abichacra",{delay:100}),await s.type(p,"augustoabichacra@sirius.com.ar",{delay:100}),await s.type(c,"password",{delay:100}),await s.type(m,"password",{delay:100});const u=a.getByRole("button");await s.click(u)}};var d,g,w;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('Full name');
    const emailInput = canvas.getByPlaceholderText('Email');
    const passwordInput = canvas.getByPlaceholderText('Password');
    const confirmPasswordInput = canvas.getByPlaceholderText('Confirm password');
    await userEvent.type(nameInput, 'Augusto Abichacra', {
      delay: 100
    });
    await userEvent.type(emailInput, 'augustoabichacra@sirius.com.ar', {
      delay: 100
    });
    await userEvent.type(passwordInput, 'password', {
      delay: 100
    });
    await userEvent.type(confirmPasswordInput, 'password', {
      delay: 100
    });
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');
    await userEvent.click(submitButton);
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const Y=["FilledForm"];export{r as FilledForm,Y as __namedExportsOrder,X as default};
