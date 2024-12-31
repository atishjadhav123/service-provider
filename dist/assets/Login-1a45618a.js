import{i as g,F as j,G as b,H as N,r as y,y as l,j as s,f as w}from"./index-e290ad6a.js";import{u as v,c as S,a as u}from"./index.esm-137b91f4.js";const P=()=>{const r=g(),[h,{data:n,isSuccess:o}]=j(),[p,{data:i,isSuccess:t}]=b(),[x,{data:c,isSuccess:d}]=N(),e=v({initialValues:{email:"",password:""},validationSchema:S({email:u().required("Enter Email").email("Invalid email format"),password:u().required("Enter Password")}),onSubmit:(a,{resetForm:f})=>{h(a),p(a),x(a),f()}}),m=a=>w({"form-control my-2":!0,"is-invalid":e.touched[a]&&e.errors[a],"is-valid":e.touched[a]&&!e.errors[a]});return y.useEffect(()=>{t&&(i!=null&&i.role)&&["electrician","plumber","painter","professinal"].includes(i.role)?(l.success("Professional login successful"),r("/pro")):o&&n?(l.success("Admin login successful"),r("/admin")):d&&(c==null?void 0:c.role)==="agency"&&(l.success("Agency login successful"),r("/agency"))},[o,n,c,d,t,i,r]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"container mt-5",children:s.jsx("div",{className:"row justify-content-center",children:s.jsxs("div",{className:"col-lg-6 col-md-8 col-sm-10",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/295/295128.png",alt:"Logo",className:"mb-3",style:{width:"100px"}}),s.jsx("h3",{children:"Welcome Back!"}),s.jsx("p",{className:"text-muted",children:"Login to access your account"})]}),s.jsxs("div",{className:"card shadow-lg",children:[s.jsx("div",{className:"card-header bg-gradient-primary text-white text-center py-3",children:s.jsx("h4",{className:"mb-0",children:"Login"})}),s.jsx("div",{className:"card-body p-4",children:s.jsxs("form",{onSubmit:e.handleSubmit,children:[s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{htmlFor:"email",className:"form-label fw-bold",children:"Email"}),s.jsx("input",{id:"email",className:m("email"),...e.getFieldProps("email"),type:"email",placeholder:"Enter your email"}),e.touched.email&&e.errors.email&&s.jsx("span",{className:"invalid-feedback",children:e.errors.email})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{htmlFor:"password",className:"form-label fw-bold",children:"Password"}),s.jsx("input",{id:"password",className:m("password"),...e.getFieldProps("password"),type:"password",placeholder:"Enter your password"}),e.touched.password&&e.errors.password&&s.jsx("span",{className:"invalid-feedback",children:e.errors.password})]}),s.jsx("div",{className:"d-grid mb-3",children:s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",children:"Login"})})]})}),s.jsx("div",{className:"card-footer text-center py-3",children:s.jsxs("p",{className:"mb-0",children:["Don’t have an account?"," ",s.jsx("a",{href:"/registercustomer",className:"text-primary fw-bold",children:"Register here"})]})})]})]})})})})};export{P as default};