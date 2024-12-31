import{E as h,r as b,y as p,j as e,f as x}from"./index-e290ad6a.js";import{u,c as j,a as l}from"./index.esm-137b91f4.js";const f=()=>{var o;const[m,{isSuccess:t,isLoading:d,error:i,isError:c}]=h(),s=u({initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:j({name:l().required("Enter Name"),email:l().required("Enter Email").email(),mobile:l().required("Enter mobile"),password:l().required("Enter Password")}),onSubmit:(a,{resetForm:n})=>{m(a),n()}}),r=a=>x({"form-control my-2":!0,"is-invalid":s.touched[a]&&s.errors[a],"is-valid":s.touched[a]&&!s.errors[a]});return b.useEffect(()=>{t&&p.success("register success")},[t]),e.jsx(e.Fragment,{children:e.jsx(e.Fragment,{children:e.jsx("div",{className:"container mt-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-lg-6 col-md-8 col-sm-10",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("img",{src:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",alt:"Bootstrap Logo",className:"mb-3",style:{width:"100px"}}),e.jsx("h3",{children:"Welcome to the Registration Page"}),e.jsx("p",{className:"text-muted",children:"Create an account to get started"})]}),e.jsxs("div",{className:"card shadow-lg",children:[e.jsx("div",{className:"card-header bg-gradient-primary text-white text-center py-3",children:e.jsx("h4",{className:"mb-0",children:"Register"})}),e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"name",className:"form-label fw-bold",children:"Name"}),e.jsx("input",{id:"name",className:r("name"),...s.getFieldProps("name"),type:"text",placeholder:"Enter your name"}),s.touched.name&&s.errors.name&&e.jsx("span",{className:"invalid-feedback",children:s.errors.name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"email",className:"form-label fw-bold",children:"Email"}),e.jsx("input",{id:"email",className:r("email"),...s.getFieldProps("email"),type:"email",placeholder:"Enter your email"}),s.touched.email&&s.errors.email&&e.jsx("span",{className:"invalid-feedback",children:s.errors.email})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"mobile",className:"form-label fw-bold",children:"Mobile"}),e.jsx("input",{id:"mobile",className:r("mobile"),...s.getFieldProps("mobile"),type:"text",placeholder:"Enter your mobile number"}),s.touched.mobile&&s.errors.mobile&&e.jsx("span",{className:"invalid-feedback",children:s.errors.mobile})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"password",className:"form-label fw-bold",children:"Password"}),e.jsx("input",{id:"password",className:r("password"),...s.getFieldProps("password"),type:"password",placeholder:"Enter your password"}),s.touched.password&&s.errors.password&&e.jsx("span",{className:"invalid-feedback",children:s.errors.password})]}),e.jsx("div",{className:"d-grid mb-3",children:e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:d,children:d?e.jsx("span",{className:"spinner-border spinner-border-sm",role:"status"}):"Register"})})]}),c&&e.jsx("div",{className:"alert alert-danger mt-3",role:"alert",children:((o=i==null?void 0:i.data)==null?void 0:o.message)||"Registration failed. Please try again."})]}),e.jsx("div",{className:"card-footer text-center py-3",children:e.jsxs("p",{className:"mb-0",children:["Already have an account?"," ",e.jsx("a",{href:"/login",className:"text-primary fw-bold",children:"Login here"})]})})]})]})})})})})};export{f as default};
