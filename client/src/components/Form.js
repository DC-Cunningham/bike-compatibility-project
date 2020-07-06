// import React from "react";
// import TypeOptions from "../TypeOptions";

// // This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function Select(props) {
//   return (
//     <>
//       <div class="input-field col s12">
//         <select>
//           <option value="" disabled selected>
//             Choose your option
//           </option>
//           <option value="1">Option 1</option>
//           <option value="2">Option 2</option>
//           <option value="3">Option 3</option>
//         </select>
//         <label>Materialize Select</label>
//       </div>
//       <div className="form-group">
//         <textarea className="form-control" rows="20" {...props} />
//       </div>
//     </>
//   );
// }

// export function Autocomplete(props) {
//   document.addEventListener("DOMContentLoaded", function () {
//     var elems = document.querySelectorAll(".autocomplete");
//     var instances = M.Autocomplete.init(elems, options);
//   });
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button
//       {...props}
//       style={{ float: "right", marginBottom: 10 }}
//       className="btn waves-effect waves-light"
//       type="submit"
//       name="action"
//     >
//       {props.children}
//       <i class="material-icons right">send</i>
//     </button>
//   );
// }
