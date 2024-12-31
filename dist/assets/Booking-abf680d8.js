import{i as m,k as b,l as h,m as x,r as f,y as u,j as e,f as j}from"./index-e290ad6a.js";import{u as p,c as v,a as i}from"./index.esm-137b91f4.js";const E=()=>{const n=m(),{id:o}=b(),[t,{isSuccess:l,isError:N,error:g,isLoading:c}]=h();x(o),console.log(o);const s=p({initialValues:{date:"",mobile:"",location:"",reason:"",professionalId:o||""},validationSchema:v({date:i().required("Enter date"),mobile:i().required("Enter mobile"),location:i().required("Enter location"),reason:i().required("Enter reason")}),onSubmit:(r,{resetForm:d})=>{console.log(r),t(r),d()}}),a=r=>j({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return f.useEffect(()=>{l&&(u.success("Booking success"),n("/"))},[l]),c?e.jsxs("div",{className:"text-center my-5",children:[e.jsx("div",{className:"spinner-border",role:"status"}),e.jsx("h4",{children:"Loading profile..."})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container py-5",style:{backgroundColor:"#f9f9f9",minHeight:"100vh"},children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"card shadow-lg border-0",children:[e.jsx("div",{className:"card-header bg-primary text-white text-center fs-4 fw-bold",children:"Book Your Appointment"}),e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsxs("div",{className:"card-body p-4",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"date",className:"form-label fw-semibold",children:"Select Date"}),e.jsx("input",{type:"date",id:"date",className:a("form-control",{"is-invalid":s.errors.date}),...s.getFieldProps("date")}),s.errors.date&&e.jsx("div",{className:"invalid-feedback",children:s.errors.date})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"mobile",className:"form-label fw-semibold",children:"Mobile Number"}),e.jsx("input",{type:"text",id:"mobile",className:a("form-control",{"is-invalid":s.errors.mobile}),...s.getFieldProps("mobile"),placeholder:"Enter mobile number"}),s.errors.mobile&&e.jsx("div",{className:"invalid-feedback",children:s.errors.mobile})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"location",className:"form-label fw-semibold",children:"Location"}),e.jsx("input",{type:"text",id:"location",className:a("form-control",{"is-invalid":s.errors.location}),...s.getFieldProps("location"),placeholder:"Enter location"}),s.errors.location&&e.jsx("div",{className:"invalid-feedback",children:s.errors.location})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"reason",className:"form-label fw-semibold",children:"Reason for Appointment"}),e.jsx("textarea",{id:"reason",rows:"3",className:a("form-control",{"is-invalid":s.errors.reason}),...s.getFieldProps("reason"),placeholder:"Enter reason"}),s.errors.reason&&e.jsx("div",{className:"invalid-feedback",children:s.errors.reason})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Book Appointment"})})]})})]})})})})})};export{E as default};
