<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">General Elements</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">General Elements</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Basic Inputs</h6>
          </div>
          <div class="card-body">
            <h5 class="section-semi-title">Horizontal</h5>
            <form>
              <div class="form-group row">
                <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input id="inputEmail1" type="email" class="form-control" placeholder="Email">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input id="inputPassword1" type="password" class="form-control" placeholder="Password">
                </div>
              </div>
            </form>
            <h5 class="section-semi-title mt-4">Vertical</h5>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input id="exampleFormControlInput1" type="email" class="form-control" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select id="exampleFormControlSelect1" class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select id="exampleFormControlSelect2" multiple class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea id="exampleFormControlTextarea1" class="form-control" rows="3" />
                </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input
                  id="exampleFormControlFile1"
                  type="file"
                  class="form-control-file"
                >
                <small class="text-muted">This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
                </small>
              </div>
            </form>
            <h5 class="section-semi-title mt-4">
              Validation States
            </h5>
            <form
              id="needs-validation"
              class="was-validated"
              novalidate
            >
              <div class="form-group">
                <label for="firstName">First name</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control is-valid"
                  placeholder="First name"
                  value="Mark"
                  required
                >
              </div>
              <div class="form-group">
                <label for="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control is-valid"
                  required
                >
                <div class="invalid-feedback">
                  Please provide a last name.
                </div>
              </div>
            </form>
            <h5 class="section-semi-title mt-4">
              Supported elements for Validation States
            </h5>
            <form class="was-validated">
              <div class="custom-control custom-checkbox mb-3">
                <input
                  id="customControlValidation1"
                  type="checkbox"
                  class="custom-control-input"
                  required
                >
                <label class="custom-control-label" for="customControlValidation1">
                  Check this customcheckbox
                </label>
                <div class="invalid-feedback">Example invalid feedback text</div>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="customControlValidation2"
                  type="radio"
                  class="custom-control-input"
                  name="radio-stacked"
                  required
                >
                <label class="custom-control-label" for="customControlValidation2">
                  Toggle this customradio
                </label>
              </div>
              <div class="custom-control custom-radio mb-3">
                <input
                  id="customControlValidation3"
                  type="radio"
                  class="custom-control-input"
                  name="radio-stacked"
                  required
                >
                <label class="custom-control-label" for="customControlValidation3">
                  Or toggle this other custom radio
                </label>
                <div class="invalid-feedback">More example invalid feedback text</div>
              </div>
              <div class="form-group">
                <select
                  class="custom-select"
                  required>
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="invalid-feedback">Example invalid custom select feedback</div>
              </div>
              <div class="custom-file">
                <input
                  id="validatedCustomFile"
                  type="file"
                  class="custom-file-input"
                  required
                >
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
              </div>
            </form>
            <h5 class="section-semi-title mt-4">
              Static Controls
            </h5>
            <form>
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">Email</label>
                <div class="col-sm-10">
                  <p class="form-control-plaintext">mohit@laraspace.in</p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 form-control-label">username</label>
                <div class="col-sm-10">
                  <p class="form-control-plaintext">laraspace</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Checkbox & Radios</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <h5 class="section-semi-title">
                  Checkbox
                </h5>
                <form>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                      Option one is this and that—be sure to include why it's great
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                    <label class="form-check-label" for="defaultCheck2">
                      Option two is disabled
                    </label>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title">Inline Checkbox</h5>
                <form>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineCheckbox1"
                      class="form-check-input"
                      type="checkbox"
                      value="option1"
                    >
                    <label class="form-check-label" for="inlineCheckbox1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineCheckbox2"
                      class="form-check-input"
                      type="checkbox"
                      value="option2"
                    >
                    <label class="form-check-label" for="inlineCheckbox2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineCheckbox3"
                      class="form-check-input"
                      type="checkbox"
                      value="option3"
                      disabled
                    >
                    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h5 class="section-semi-title mt-4">
                  Radio
                </h5>
                <form>
                  <div class="form-check">
                    <input
                      id="exampleRadios1"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option1"
                      checked
                    >
                    <label class="form-check-label" for="exampleRadios1">
                      Default radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="exampleRadios2"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option2"
                    >
                    <label class="form-check-label" for="exampleRadios2">
                      Second default radio
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input
                      id="exampleRadios3"
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option3"
                      disabled
                    >
                    <label class="form-check-label" for="exampleRadios3">
                      Disabled radio
                    </label>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <h5 class="section-semi-title mt-4">Inline Radio</h5>
                <form>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineRadio1"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option1"
                    >
                    <label class="form-check-label" for="inlineRadio1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineRadio2"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option2"
                    >
                    <label class="form-check-label" for="inlineRadio2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineRadio3"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option3"
                      disabled
                    >
                    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
