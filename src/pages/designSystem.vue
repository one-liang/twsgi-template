<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

const themeColors = [
  'primary', 'secondary', 'success', 'danger',
  'warning', 'info', 'light', 'dark',
];
</script>

<template>
  <AppHeader />

  <div class="container overflow-hidden py-5">
    <!--      button      -->
    <div class="title row">
      <div class="col-12">
        <h2>Button</h2>
      </div>
    </div>
    <div class="buttons row my-4">
      <div class="col-8">
        <div class="bs-component mb-3">
          <button v-for="themeColor of themeColors" :key="themeColor" type="button" :class="`btn btn-${themeColor}`">{{
            themeColor }}</button>
          <button type="button" class="btn btn-link">
            <span>Link</span>
            <i class="fa-regular fa-arrow-up-right"></i>
          </button>
        </div>
        <div class="bs-component mb-3">
          <button v-for="themeColor of themeColors" :key="themeColor" type="button"
            :class="`btn btn-${themeColor} disabled`">{{ themeColor }}</button>
          <button type="button" class="btn btn-link disabled">Link</button>

          <a href="#" class="btn btn-primary btn-lg">
            按鈕文字
            <i class="fa-light fa-angle-right"></i>
          </a>
          <a href="#" class="btn btn-gold btn-lg">
            按鈕文字
            <i class="fa-light fa-angle-right"></i>
          </a>
          <a href="#" class="btn btn-link">
            <span>按鈕文字</span>
            <i class="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
        <div class="bs-component mb-3">
          <button v-for="themeColor of themeColors" :key="themeColor" type="button"
            :class="`btn btn-outline-${themeColor}`">{{ themeColor }}</button>

          <a href="#" class="btn btn-primary btn-lg">
            按鈕文字
            <i class="fa-light fa-angle-right"></i>
          </a>
          <a href="#" class="btn btn-gold btn-lg">
            按鈕文字
            <i class="fa-light fa-angle-right"></i>
          </a>
          <a href="#" class="btn btn-link">
            <span>按鈕文字</span>
            <i class="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
        <div class="dropdown-split-button bs-component mb-3">
          <div v-for="themeColor of themeColors" :key="themeColor" class="btn-group">
            <button type="button" :class="`btn btn-${themeColor}`">{{ themeColor }}</button>
            <button type="button" :class="`btn dropdown-toggle dropdown-toggle-split btn-${themeColor}`"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
        </div>
        <div class="dropdown-single-button bs-component mb-3">
          <div v-for="themeColor of themeColors" :key="themeColor" class="btn-group">
            <button type="button" :class="`btn dropdown-toggle btn-${themeColor}`" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ themeColor }}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <div class="bs-component">
          <button type="button" class="btn btn-primary">Default button</button>
          <button type="button" class="btn btn-primary btn-lg">Large button</button>
          <button type="button" class="btn btn-primary btn-md">Medium button</button>
          <button type="button" class="btn btn-primary btn-sm">Small button</button>
        </div>
        <div class="bs-component">
          <button type="button" class="btn btn-gold">Default button</button>
          <button type="button" class="btn btn-gold btn-lg">Large button</button>
          <button type="button" class="btn btn-gold btn-md">Medium button</button>
          <button type="button" class="btn btn-gold btn-sm">Small button</button>
        </div>
      </div>
      <div class="col-3">
        <div class="bs-component mb-3">
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
            <label class="btn btn-primary" for="btncheck1">Checkbox</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
            <label class="btn btn-primary" for="btncheck2">Checkbox2</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
            <label class="btn btn-primary" for="btncheck3">Checkbox3</label>
          </div>
        </div>
        <div class="bs-component mb-3">
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
            <label class="btn btn-primary" for="btnradio1">Radio 1</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <label class="btn btn-primary" for="btnradio2">Radio 2</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
            <label class="btn btn-primary" for="btnradio3">Radio 3</label>
          </div>
        </div>
        <div class="bs-component mb-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>
        </div>
        <div class="bs-component">
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary">1</button>
              <button type="button" class="btn btn-secondary">2</button>
              <button type="button" class="btn btn-secondary">3</button>
              <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-secondary">5</button>
              <button type="button" class="btn btn-secondary">6</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--      navbar      -->
    <div class="title row">
      <div class="col-12">
        <h2>Navbar</h2>
      </div>
    </div>
    <div class="navbars row my-4">
      <div class="col-12 bs-component mb-3">
        <!-- Navbar primary -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-secondary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div class="col-12 bs-component mb-3">
        <!-- Navbar dark -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-secondary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div class="col-12 bs-component">
        <!-- Navbar light -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light" data-bs-theme="light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent3">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-secondary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!--      typography      -->
    <div class="title row">
      <div class="col-12">
        <h2>Typography</h2>
      </div>
    </div>
    <div class="typographies row my-4">
      <div class="col-4">
        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>
        <h3>
          Heading
          <small class="text-muted">with muted text</small>
        </h3>
        <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
      </div>
      <div class="col-4">
        <h2>Example body text</h2>
        <div class="bs-component">
          <p>
            Lorem ipsum dolor sit amet,
            <a href="#">content with link</a>
            elit. Nihil veritatis voluptas! Adipisci cum, incidunt nostrum quidem repellat sed
            velit. Architecto ipsum itaque reprehenderit! Aliquam aut culpa ipsam
          </p>
          <p><mark>This line of text is meant to be treated as marked text.</mark></p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
          </p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </div>
      </div>
      <div class="col-4">
        <h2>Text utilities</h2>
        <div class="bs-component">
          <p class="text-primary">Primary text</p>
          <p class="text-secondary">Secondary text</p>
          <p class="text-success">Success text</p>
          <p class="text-danger">Danger text</p>
          <p class="text-warning">Warning text</p>
          <p class="text-info">Info text</p>
          <p class="text-light bg-dark">Light text</p>
          <p class="text-dark">Dark text</p>
          <p class="text-muted">Muted text</p>
          <p class="text-white bg-dark">White text</p>
        </div>
      </div>
    </div>

    <!--      Blockquotes      -->
    <div class="title row">
      <div class="col-12">
        <h2>Blockquotes</h2>
      </div>
    </div>
    <div class="blockquotes row my-4">
      <div class="col-4 bs-component">
        <figure>
          <blockquote class="blockquote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
      <div class="col-4 bs-component">
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
      <div class="col-4 bs-component">
        <figure class="text-end">
          <blockquote class="blockquote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
              ante.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
    </div>

    <!--      Table      -->
    <div class="title row">
      <div class="col-12">
        <h2>Table</h2>
      </div>
    </div>
    <div class="table row my-4">
      <div class="bs-component">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="table-hover">
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr v-for="themeColor of themeColors" :key="themeColor" :class="`table-${themeColor}`">
              <th scope="row">{{ themeColor }}</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--      forms      -->
    <div class="title row">
      <div class="col-12">
        <h2>Forms</h2>
      </div>
    </div>
    <div class="forms row my-4">
      <div class="col-6 bs-component">
        <form>
          <fieldset>
            <legend>Legend</legend>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
                <span class="text-danger">*</span>
              </label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3 d-flex gap-3">
              <label for="exampleInputEmail1" class="form-label">
                標題
                <span class="text-danger">*</span>
              </label>
              <div class="flex-grow-1">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="position-relative">
                <input type="password" class="form-control" id="inputPassword" />
                <button
                  class="border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-2 d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                    <path
                      d="M9.03125 1.5C6.96875 1.5 5.3125 2.4375 4.03125 3.625C2.8125 4.75 2 6.0625 1.5625 7C2 7.9375 2.8125 9.28125 4.03125 10.4062C5.3125 11.5938 6.96875 12.5 9.03125 12.5C11.0625 12.5 12.7188 11.5938 14 10.4062C15.2188 9.28125 16.0625 7.9375 16.4688 7C16.0625 6.0625 15.2188 4.75 14.0312 3.625C12.7188 2.4375 11.0625 1.5 9.03125 1.5ZM3 2.53125C4.46875 1.15625 6.5 0 9.03125 0C11.5312 0 13.5625 1.15625 15.0312 2.53125C16.5 3.90625 17.4688 5.5 17.9375 6.625C18.0312 6.875 18.0312 7.15625 17.9375 7.40625C17.4688 8.5 16.5 10.125 15.0312 11.5C13.5625 12.875 11.5312 14 9.03125 14C6.5 14 4.46875 12.875 3 11.5C1.53125 10.125 0.5625 8.5 0.09375 7.40625C0 7.15625 0 6.875 0.09375 6.625C0.5625 5.5 1.53125 3.875 3 2.53125ZM9.03125 9.5C10.4062 9.5 11.5312 8.40625 11.5312 7C11.5312 5.625 10.4062 4.5 9.03125 4.5C9 4.5 8.96875 4.5 8.96875 4.5C9 4.6875 9.03125 4.84375 9.03125 5C9.03125 6.125 8.125 7 7.03125 7C6.84375 7 6.6875 7 6.53125 6.9375C6.53125 6.96875 6.53125 7 6.53125 7C6.53125 8.40625 7.625 9.5 9.03125 9.5ZM9.03125 3C10.4375 3 11.75 3.78125 12.4688 5C13.1875 6.25 13.1875 7.78125 12.4688 9C11.75 10.25 10.4375 11 9.03125 11C7.59375 11 6.28125 10.25 5.5625 9C4.84375 7.78125 4.84375 6.25 5.5625 5C6.28125 3.78125 7.59375 3 9.03125 3Z"
                      fill="#9A9C9F" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mb-3">
              <label for="inputSearch" class="col-sm-2 col-form-label">Search</label>
              <div class="position-relative">
                <button
                  class="border-0 bg-transparent position-absolute start-0 top-50 translate-middle-y ms-2 d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M11.5 6.5C11.5 4.71875 10.5312 3.09375 9 2.1875C7.4375 1.28125 5.53125 1.28125 4 2.1875C2.4375 3.09375 1.5 4.71875 1.5 6.5C1.5 8.3125 2.4375 9.9375 4 10.8438C5.53125 11.75 7.4375 11.75 9 10.8438C10.5312 9.9375 11.5 8.3125 11.5 6.5ZM10.5312 11.625C9.40625 12.5 8 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.03125 12.4688 9.4375 11.5938 10.5625L15.7812 14.7188C16.0625 15.0312 16.0625 15.5 15.7812 15.7812C15.4688 16.0938 15 16.0938 14.7188 15.7812L10.5312 11.625Z"
                      fill="#9A9C9F" />
                  </svg>
                </button>
                <input type="text" class="form-control ps-5" id="inputSearch" />
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleSelect">Example select</label>
              <select class="form-select" aria-label="Default select example" id="exampleSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="exampleIconSelect">Example icon select</label>
              <div class="position-relative">
                <button
                  class="border-0 bg-transparent position-absolute start-0 top-50 translate-middle-y ms-3 d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                    <path
                      d="M10.5 6C10.5 3.53125 8.46875 1.5 6 1.5C3.5 1.5 1.5 3.53125 1.5 6C1.5 6.40625 1.625 7 1.96875 7.8125C2.28125 8.5625 2.75 9.4375 3.28125 10.3125C4.1875 11.75 5.21875 13.125 6 14.125C6.75 13.125 7.78125 11.75 8.6875 10.3125C9.21875 9.4375 9.6875 8.5625 10 7.8125C10.3438 7 10.5 6.40625 10.5 6ZM12 6C12 8.75 8.34375 13.5938 6.71875 15.625C6.34375 16.0938 5.625 16.0938 5.25 15.625C3.65625 13.5938 0 8.75 0 6C0 2.6875 2.6875 0 6 0C9.3125 0 12 2.6875 12 6ZM7 6C7 5.46875 6.53125 5 6 5C5.4375 5 5 5.46875 5 6C5 6.5625 5.4375 7 6 7C6.53125 7 7 6.5625 7 6ZM3.5 6C3.5 5.125 3.96875 4.3125 4.75 3.84375C5.5 3.40625 6.46875 3.40625 7.25 3.84375C8 4.3125 8.5 5.125 8.5 6C8.5 6.90625 8 7.71875 7.25 8.1875C6.46875 8.625 5.5 8.625 4.75 8.1875C3.96875 7.71875 3.5 6.90625 3.5 6Z"
                      fill="#9A9C9F" />
                  </svg>
                </button>
                <select class="form-select ps-5" aria-label="Default select example" id="exampleIconSelect">
                  <option value="1">縣市</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleMultiSelect">Example multiple select</label>
              <select class="form-select" multiple aria-label="multiple select example" id="exampleMultiSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">File input</label>
              <input type="file" class="form-control" id="formFile" />
              <div id="fileHelp" class="form-text">
                This is some placeholder block-level help text for the above input. It's a bit
                lighter and easily wraps to a new line.
              </div>
            </div>
            <div class="mb-3">
              <legend>Radio buttons</legend>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                  checked />
                <label class="form-check-label" for="exampleRadios1">Default radio</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">Second default radio</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
                  disabled />
                <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
              </div>
            </div>
            <div class="mb-3">
              <legend>Checkboxes</legend>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
                <label class="form-check-label" for="flexCheckDisabled">Disabled checkbox</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
      <div class="col-4 offset-lg-1 bs-component">
        <form>
          <fieldset>
            <div class="mb-3">
              <label for="disabledInput">Disabled input</label>
              <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input"
                aria-label="Disabled input example" disabled />
            </div>
            <div class="mb-3">
              <label for="readonlyInput2">Readonly input</label>
              <input class="form-control" id="readonlyInput2" type="text" value="Disabled readonly input"
                aria-label="Disabled input example" readonly />
            </div>
            <div class="mb-3">
              <label for="readonlyInput">Readonly input</label>
              <input class="form-control" id="readonlyInput" type="text" value="Readonly input"
                aria-label="readonly input example" readonly />
            </div>
            <div class="mb-3">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label">Valid input</label>
                  <input type="text" class="form-control is-valid" id="validationCustom01" value="Correct value"
                    required />
                  <div class="valid-feedback">Success you've done!</div>
                </div>
              </form>
            </div>
            <div class="mb-3">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom03" class="form-label">Invalid input</label>
                  <input type="text" class="form-control is-invalid" id="validationCustom02" value="Wrong value"
                    required />
                  <div class="invalid-feedback">
                    <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                      fill="none">
                      <path
                        d="M8 0C3.58922 0 0 3.58922 0 8C0 12.4108 3.58922 16 8 16C12.4108 16 16 12.4108 16 8C16 3.58922 12.4108 0 8 0ZM8 12.5714C7.36888 12.5714 6.85714 12.0597 6.85714 11.4286C6.85714 10.7973 7.36888 10.2857 8 10.2857C8.63112 10.2857 9.14286 10.7973 9.14286 11.4286C9.14286 12.0597 8.63112 12.5714 8 12.5714ZM9.14286 8C9.14286 8.63177 8.63177 9.14286 8 9.14286C7.36823 9.14286 6.85714 8.63177 6.85714 8V4.57143C6.85714 3.93966 7.36823 3.42857 8 3.42857C8.63177 3.42857 9.14286 3.93966 9.14286 4.57143V8Z"
                        fill="#E60012" />
                    </svg>
                    請輸入正確格式
                  </div>
                </div>
              </form>
            </div>
            <div class="mb-3">
              <label for="inputLarge" class="form-label">Large input</label>
              <input type="email" class="form-control form-control-lg" id="inputLarge" placeholder="Large size" />
            </div>
            <div class="mb-3">
              <label for="inputDefault" class="form-label">Default input</label>
              <input type="email" class="form-control" id="inputDefault" placeholder="Default size" />
            </div>
            <div class="mb-3">
              <label for="inputSmall" class="form-label">Small input</label>
              <input type="email" class="form-control form-control-sm" id="inputSmall" placeholder="Small size" />
            </div>
            <label for="inputAmount" class="form-label">Enter amount</label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input type="text" class="form-control" id="inputAmount" aria-label="Amount (to the nearest dollar)" />
              <span class="input-group-text">.00</span>
            </div>
            <fieldset>
              <legend>Custom forms</legend>
              <div class="mb-3">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Checked switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled />
                  <label class="form-check-label" for="flexSwitchCheckDisabled">
                    Disabled switch checkbox input
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check form-switch form-switch--light">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedLight"
                    checked />
                  <label class="form-check-label" for="flexSwitchCheckCheckedLight">
                    Checked switch checkbox input (Light)
                  </label>
                </div>
                <div class="form-check form-switch form-switch--light">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabledLight"
                    disabled />
                  <label class="form-check-label" for="flexSwitchCheckDisabledLight">
                    Disabled switch checkbox input (Light)
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                </div>
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile2" />
              </div>
              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
              </div>
            </fieldset>
          </fieldset>
        </form>
      </div>
    </div>

    <!--      Search bar      -->
    <div class="title row">
      <h2>Search bar</h2>
      <div style="max-width: 500px">
        <div class="header__search-form">
          <div class="header__search-input-wrapper">
            <svg class="header__search-input-icon" width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
              <path
                d="M21.625 19.875C22.0938 20.375 22.0938 21.1562 21.625 21.6562C21.125 22.125 20.3438 22.125 19.8438 21.6562L16.125 17.9062C14.8438 18.75 13.2812 19.1875 11.5938 18.9688C8.71875 18.5625 6.40625 16.2188 6.03125 13.375C5.5 9.125 9.09375 5.53125 13.3438 6.0625C16.1875 6.4375 18.5312 8.75 18.9375 11.625C19.1562 13.3125 18.7188 14.875 17.875 16.125L21.625 19.875ZM8.46875 12.5C8.46875 14.7188 10.25 16.5 12.4688 16.5C14.6562 16.5 16.4688 14.7188 16.4688 12.5C16.4688 10.3125 14.6562 8.5 12.4688 8.5C10.25 8.5 8.46875 10.3125 8.46875 12.5Z"
                fill="#currentColor"></path>
            </svg>
            <input type="text" class="header__search-input" placeholder="搜尋" />
          </div>
          <button type="submit" class="btn btn-md btn-primary">搜尋</button>
        </div>
      </div>
    </div>
    <div class="navs row my-4">
      <div class="col-6 bs-component">
        <h2>Tabs</h2>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 15px">
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
              type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Profile
            </button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
              type="button" role="tab" aria-controls="nav-contact" aria-selected="false" disabled>
              Disabled
            </button>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
            tabindex="0">
            HOMERaw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
            stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg
            carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
            sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            PROFILEFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
            coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes
            anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress,
            commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
            nostrud organic, assumenda labore aesthetic magna delectus mollit.
          </div>
        </div>
      </div>
      <div class="col-6">
        <h2>Pills</h2>
        <div class="bs-component mb-4">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="bs-component">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row my-4">
      <!-- Offcanvas -->
      <div class="col-6">
        <h2>Offcanvas</h2>

        <div class="bg-body-tertiary overflow-hidden card">
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel"
            style="position: static; height: 200px; visibility: visible; transform: translateY(0)">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              Content for the offcanvas goes here. You can place just about any Bootstrap
              component or custom elements here.
            </div>
          </div>
        </div>
      </div>

      <!-- Placeholders -->
      <div class="col-6">
        <h2>Placeholders</h2>

        <div class="bg-body-tertiary card">
          <div class="card-body d-flex justify-content-around">
            <div class="card" style="width: 18rem">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
              </svg>

              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div class="card" aria-hidden="true" style="width: 18rem">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
              </svg>

              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navs row">
      <div class="col-6">
        <h2>Breadcrumbs</h2>
        <!--      breadcrumb's each padding is 0 now      -->
        <div class="bs-component">
          <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item" aria-current="page">Library</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item" aria-current="page">Data</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active"><a href="#">Home</a></li>
              <li class="breadcrumb-item" aria-current="page">Library</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
                <a href="#">
                  <i class="fa-solid fa-angle-left"></i>
                  首頁
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="col-6">
        <h2>Pagination</h2>
        <div class="bs-component">
          <ul class="pagination d-flex column-gap-3">
            <li class="page-item disabled">
              <button class="btn btn-arrow" disabled type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M22.8604 8L2.86035 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M10.917 1.33301C10.8319 3.55523 8.8239 7.99967 1.47255 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M10.917 14.667C10.8319 12.4448 8.8239 8.00033 1.47255 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
              <button class="btn btn-arrow" type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M1.13965 8L21.1396 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M13.083 1.33301C13.1681 3.55523 15.1761 7.99967 22.5275 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M13.083 14.667C13.1681 12.4448 15.1761 8.00033 22.5275 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="bs-component">
          <ul class="pagination pagination-lg d-flex column-gap-3">
            <li class="page-item">
              <button class="btn btn-arrow" type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M22.8604 8L2.86035 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M10.917 1.33301C10.8319 3.55523 8.8239 7.99967 1.47255 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M10.917 14.667C10.8319 12.4448 8.8239 8.00033 1.47255 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
              <button class="btn btn-arrow" type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M1.13965 8L21.1396 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M13.083 1.33301C13.1681 3.55523 15.1761 7.99967 22.5275 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M13.083 14.667C13.1681 12.4448 15.1761 8.00033 22.5275 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="bs-component">
          <ul class="pagination pagination-sm d-flex column-gap-3">
            <li class="page-item">
              <button class="btn btn-arrow" type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M22.8604 8L2.86035 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M10.917 1.33301C10.8319 3.55523 8.8239 7.99967 1.47255 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M10.917 14.667C10.8319 12.4448 8.8239 8.00033 1.47255 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">1</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item">
              <button class="btn btn-arrow" type="button" aria-label="Arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                  <path d="M1.13965 8L21.1396 8" stroke="#183390" stroke-width="1.8" />
                  <path d="M13.083 1.33301C13.1681 3.55523 15.1761 7.99967 22.5275 7.99967" stroke="#183390"
                    stroke-width="1.8" />
                  <path d="M13.083 14.667C13.1681 12.4448 15.1761 8.00033 22.5275 8.00033" stroke="#183390"
                    stroke-width="1.8" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="bs-component">
          <nav aria-label="Page navigation example">
            <ul class="pagination d-flex column-gap-3">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <h2>Carousel</h2>
    <div class="mb-5">
      <ul class="carousel-pagination">
        <li class="carousel-pagination__item active" aria-current="page"></li>
        <li class="carousel-pagination__item"></li>
        <li class="carousel-pagination__item"></li>
        <li class="carousel-pagination__item"></li>
        <li class="carousel-pagination__item"></li>
        <li class="carousel-pagination__item"></li>
      </ul>

      <div class="bg-dark py-2 mt-2">
        <ul class="carousel-pagination carousel-pagination--dark">
          <li class="carousel-pagination__item active" aria-current="page"></li>
          <li class="carousel-pagination__item"></li>
          <li class="carousel-pagination__item"></li>
          <li class="carousel-pagination__item"></li>
          <li class="carousel-pagination__item"></li>
          <li class="carousel-pagination__item"></li>
        </ul>
      </div>
    </div>

    <!--      Indicators      -->
    <div class="big_title row">
      <div class="col-12">
        <h2>Indicator</h2>
      </div>
    </div>
    <!--      Alerts      -->
    <div class="title row">
      <div class="col-12">
        <h2>Alerts</h2>
      </div>
    </div>
    <div class="alerts row my-4">
      <div v-for="themeColor of themeColors" :key="themeColor" class="col-4 bs-component">
        <div :class="`alert alert-${themeColor}`" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" style="float: right"></button>
          <div>
            Danger!! Change a few things up and
            <a href="#" class="alert-link">try submitting</a>
            again.
          </div>
        </div>
      </div>
    </div>
    <!--      Badges      -->
    <div class="title row">
      <div class="col-12">
        <h2>Badges</h2>
      </div>
    </div>
    <div class="badges row" style="margin-bottom: 40px">
      <div class="col-6 bs-component">
        <!--   in bootstrap v5.2 , <span class="badge text-bg-primary">Primary</span> is available   -->
        <span v-for="themeColor of themeColors" :key="themeColor" :class="`badge text-bg-${themeColor}`">{{ themeColor
        }}</span>
      </div>
      <div class="col-6 bs-component">
        <button type="button" class="btn btn-primary">
          Notifications
          <span class="badge text-bg-secondary">4</span>
        </button>
      </div>
    </div>
    <div class="badges row">
      <div class="col-6 bs-component">
        <span v-for="themeColor of themeColors" :key="themeColor" :class="`badge rounded-pill text-bg-${themeColor}`">{{
          themeColor }}</span>
      </div>
      <div class="col-6 bs-component">
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>

    <!--      Tag      -->
    <div class="mt-3">
      <h2>Tag</h2>
    </div>
    <div style="margin-bottom: 40px">
      <span class="tag tag-l">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.38672 0C5.85156 0 6.28906 0.191406 6.61719 0.519531L11.4297 5.33203C12.1133 6.01562 12.1133 7.13672 11.4297 7.82031L7.79297 11.457C7.10938 12.1406 5.98828 12.1406 5.30469 11.457L0.492188 6.64453C0.164062 6.31641 0 5.87891 0 5.41406V1.3125C0 0.601562 0.574219 0 1.3125 0H5.38672ZM1.3125 5.41406C1.3125 5.52344 1.33984 5.63281 1.42188 5.71484L6.23438 10.5273C6.39844 10.6914 6.69922 10.6914 6.86328 10.5273L10.5 6.89062C10.6914 6.72656 10.6914 6.42578 10.5 6.26172L5.6875 1.44922C5.60547 1.36719 5.49609 1.3125 5.38672 1.3125H1.3125V5.41406ZM3.0625 2.1875C3.52734 2.1875 3.9375 2.59766 3.9375 3.0625C3.9375 3.55469 3.52734 3.9375 3.0625 3.9375C2.57031 3.9375 2.1875 3.55469 2.1875 3.0625C2.1875 2.59766 2.57031 2.1875 3.0625 2.1875Z"
            fill="#0F0F0F" />
        </svg>
        標籤樣式
      </span>
      <span class="tag tag-s">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.38672 0C5.85156 0 6.28906 0.191406 6.61719 0.519531L11.4297 5.33203C12.1133 6.01562 12.1133 7.13672 11.4297 7.82031L7.79297 11.457C7.10938 12.1406 5.98828 12.1406 5.30469 11.457L0.492188 6.64453C0.164062 6.31641 0 5.87891 0 5.41406V1.3125C0 0.601562 0.574219 0 1.3125 0H5.38672ZM1.3125 5.41406C1.3125 5.52344 1.33984 5.63281 1.42188 5.71484L6.23438 10.5273C6.39844 10.6914 6.69922 10.6914 6.86328 10.5273L10.5 6.89062C10.6914 6.72656 10.6914 6.42578 10.5 6.26172L5.6875 1.44922C5.60547 1.36719 5.49609 1.3125 5.38672 1.3125H1.3125V5.41406ZM3.0625 2.1875C3.52734 2.1875 3.9375 2.59766 3.9375 3.0625C3.9375 3.55469 3.52734 3.9375 3.0625 3.9375C2.57031 3.9375 2.1875 3.55469 2.1875 3.0625C2.1875 2.59766 2.57031 2.1875 3.0625 2.1875Z"
            fill="#0F0F0F" />
        </svg>
        標籤樣式
      </span>
    </div>

    <!--      Share      -->
    <div class="mt-3">
      <h2>Share</h2>
    </div>
    <div class="mb-5 d-flex gap-3 align-items-center">
      <button class="btn-share btn-share-fb" aria-label="分享到 Facebook">
        <i class="fa-brands fa-facebook-f"></i>
      </button>
      <button class="btn-share btn-share-line" aria-label="分享到 Line">
        <i class="fa-brands fa-line"></i>
      </button>
      <button class="btn-share btn-share-twitter" aria-label="分享到 Twitter">
        <i class="fa-brands fa-twitter"></i>
      </button>
      <button class="btn-share btn-share-thread" aria-label="分享到 Threads">
        <i class="fa-brands fa-threads"></i>
      </button>
    </div>
    <!--      anchor link      -->
    <div class="mt-3">
      <h2>anchor link</h2>
    </div>
    <div class="mb-5">
      <a href="#" class="anchor-link" aria-label="Step 01. 初步諮詢與需求對接">
        <span class="anchor-link__step">Step 01.</span>
        <span class="anchor-link__title">初步諮詢與需求對接</span>
        <i class="fa-solid fa-chevron-down anchor-link__icon"></i>
      </a>
    </div>

    <!--      Progress      -->
    <div class="title row">
      <div class="col-12">
        <h2>Progress</h2>
      </div>
    </div>
    <div class="basic_progress row">
      <h3>Basic</h3>
      <div class="col-12 bs-component">
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </div>
    <div class="backgrounds_progress row">
      <h3>Contextual alternatives</h3>
      <div class="col-12 bs-component">
        <div v-for="themeColor of themeColors" :key="themeColor" class="progress mb-3">
          <div :class="`progress-bar bg-${themeColor}`" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
    <div class="multiple_progress row">
      <h3>Multiple bars</h3>
      <div class="col-12 bs-component">
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0"
            aria-valuemax="100"></div>
          <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </div>
    <div class="striped_progress row">
      <h3>Striped</h3>
      <div class="col-12 bs-component">
        <div v-for="themeColor of themeColors" :key="themeColor" class="progress mb-3">
          <div :class="`progress-bar progress-bar-striped bg-${themeColor}`" role="progressbar" style="width: 25%"
            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
    <div class="animated_progress row">
      <h3>Animated</h3>
      <div class="col-12 bs-component">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div>
      </div>
    </div>

    <!--      List Groups      -->
    <div class="title row mt-5">
      <div class="col-12">
        <h2>List groups</h2>
      </div>
    </div>
    <div class="listGroups row">
      <div class="col-4 bs-component">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge text-bg-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge text-bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
      <div class="col-4 bs-component">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            The current link item
          </a>
          <a href="#" class="list-group-item list-group-item-action">A second link item</a>
          <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
        </div>
      </div>
      <div class="col-4 bs-component">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>
        </div>
      </div>
    </div>
    <!--      Cards      -->
    <div class="title row">
      <div class="col-12">
        <h2>Cards</h2>
      </div>
    </div>
    <div class="cards row">
      <div class="col-4 bs-component">
        <div v-for="themeColor of themeColors" :key="themeColor" :class="`card text-bg-${themeColor} mb-3`"
          style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">{{ themeColor }} card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 bs-component">
        <div v-for="themeColor of themeColors" :key="themeColor" :class="`card border-${themeColor} mb-3`"
          style="max-width: 18rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">{{ themeColor }} card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 bs-component">
        <div class="card" style="width: 18rem">
          <div class="card-header fs-3">Header</div>
          <img src="" class="card-img-top" alt="Image" style="background-color: gray; min-height: 200px" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
        <div class="card mt-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>

    <!--      Dialogs      -->
    <div class="title row mt-5">
      <div class="col-12">
        <h2>Dialogs</h2>
      </div>
    </div>
    <div class="dialogs row justify-content-between">
      <div class="col-5 bs-component">
        <h2>Modal</h2>
        <div class="modal d-block position-static" id="myModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <h2>Popovers</h2>
        <div class="bs-component">
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="left" data-bs-content="Left popover">
            Left
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="top" data-bs-content="Top popover">
            Top
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="bottom" data-bs-content="Bottom popover">
            Bottom
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="right" data-bs-content="Right popover">
            right
          </button>
        </div>
        <h2 class="mt-5">Tooltips</h2>
        <div class="bs-component">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
            title="Tooltip on left">
            Left
          </button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
            title="Tooltip on top">
            Top
          </button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
            title="Tooltip on bottom">
            Bottom
          </button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Tooltip on right">
            Right
          </button>
        </div>
      </div>
    </div>

    <!--      Accordian      -->
    <div class="title row">
      <div class="col-12">
        <h2>Accordions</h2>
      </div>
    </div>
    <div class="accordions row">
      <div class="col-4 bs-component">
        <h2>Basic Accordion</h2>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong>
                It is shown by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong>
                It is hidden by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong>
                It is hidden by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 bs-component">
        <h2>Flush Accordion</h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code>
                class. This is the first item's accordion body.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code>
                class. This is the second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code>
                class. This is the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make it look, at least
                at first glance, a bit more representative of how this would look in a real-world
                application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 bs-component">
        <h2>Always open</h2>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong>
                It is shown by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong>
                It is hidden by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong>
                It is hidden by default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes control the overall appearance,
                as well as the showing and hiding via CSS transitions. You can modify any of this
                with custom CSS or overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>
                , though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--      Spinners      -->
    <div class="title row mt-5">
      <div class="col-12">
        <h2>Spinners</h2>
      </div>
    </div>

    <div class="spinners row">
      <div class="col-4 bs-component">
        <h2>Border spinner</h2>
        <div v-for="themeColor of themeColors" :key="themeColor" :class="`spinner-border text-${themeColor}`"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="col-4 bs-component">
        <h2>Growing spinner</h2>
        <div v-for="themeColor of themeColors" :key="themeColor" :class="`spinner-grow text-${themeColor}`"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="col-4 bs-component">
        <button class="btn btn-primary mb-2" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-primary mb-2" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
        <button class="btn btn-primary mb-2" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-primary mb-2" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
        </button>
      </div>
    </div>
  </div>

  <AppFooter />
</template>