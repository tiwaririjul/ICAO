import React from "react";

const STable = () => {
  console.log("data from localstorage", localStorage.getItem("UK's'2"));

  return (
    <div class="">
      <table class="table table-hover table-bordered table-sm text-center">
        <thead>
          <tr>
            <th scope="col">State Name</th>
            <th scope="col">Compliance Options</th>
            <th scope="col">State Reference</th>
            <th scope="col">Details of Difference</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>India</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>st</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>st</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>America</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>st</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Japan</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>st</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default STable;
