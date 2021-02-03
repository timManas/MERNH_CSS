import React from 'react'

const HomeScreen = () => {
  return (
    <>
      <h1>HomeScreen</h1>

      <h3>Buttons</h3>
      <p>
        <button type='button' class='btn btn-primary'>
          Primary
        </button>
        <button type='button' class='btn btn-secondary'>
          Secondary
        </button>
        <button type='button' class='btn btn-success'>
          Success
        </button>
        <button type='button' class='btn btn-info'>
          Info
        </button>
        <button type='button' class='btn btn-warning'>
          Warning
        </button>
        <button type='button' class='btn btn-danger'>
          Danger
        </button>
        <button type='button' class='btn btn-link'>
          Link
        </button>
      </p>
      <p>
        <button type='button' class='btn btn-outline-primary'>
          Primary
        </button>
        <button type='button' class='btn btn-outline-secondary'>
          Secondary
        </button>
        <button type='button' class='btn btn-outline-success'>
          Success
        </button>
        <button type='button' class='btn btn-outline-info'>
          Info
        </button>
        <button type='button' class='btn btn-outline-warning'>
          Warning
        </button>
        <button type='button' class='btn btn-outline-danger'>
          Danger
        </button>
      </p>

      <p>
        <button type='button' class='btn btn-primary btn-lg'>
          Large button
        </button>
        <button type='button' class='btn btn-primary'>
          Default button
        </button>
        <button type='button' class='btn btn-primary btn-sm'>
          Small button
        </button>
      </p>

      <h3>Typography</h3>
      <h2>Emphasis classes</h2>
      <p class='text-muted'>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
      </p>
      <p class='text-primary'>
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </p>
      <p class='text-secondary'>
        Pellentesque ornare sem lacinia quam venenatis vestibulum.
      </p>
      <p class='text-warning'>
        Etiam porta sem malesuada magna mollis euismod.
      </p>
      <p class='text-danger'>
        Donec ullamcorper nulla non metus auctor fringilla.
      </p>
      <p class='text-success'>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <p class='text-info'>
        Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>

      <h3>Tables</h3>
      <table class='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Type</th>
            <th scope='col'>Column heading</th>
            <th scope='col'>Column heading</th>
            <th scope='col'>Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr class='table-active'>
            <th scope='row'>Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr>
            <th scope='row'>Default</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-primary'>
            <th scope='row'>Primary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-secondary'>
            <th scope='row'>Secondary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-success'>
            <th scope='row'>Success</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-danger'>
            <th scope='row'>Danger</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-warning'>
            <th scope='row'>Warning</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-info'>
            <th scope='row'>Info</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-light'>
            <th scope='row'>Light</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr class='table-dark'>
            <th scope='row'>Dark</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
      <h3>Forms</h3>

      <div class='row'>
        <div class='col-lg-6'>
          <form>
            <fieldset>
              <legend>Legend</legend>
              <div class='form-group row'>
                <label for='staticEmail' class='col-sm-2 col-form-label'>
                  Email
                </label>
                <div class='col-sm-10'>
                  <input
                    type='text'
                    readonly=''
                    class='form-control-plaintext'
                    id='staticEmail'
                    value='email@example.com'
                  />
                </div>
              </div>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
                <small id='emailHelp' class='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <div class='form-group'>
                <label for='exampleSelect1'>Example select</label>
                <select class='form-control' id='exampleSelect1'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class='form-group'>
                <label for='exampleSelect2'>Example multiple select</label>
                <select multiple='' class='form-control' id='exampleSelect2'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class='form-group'>
                <label for='exampleTextarea'>Example textarea</label>
                <textarea
                  class='form-control'
                  id='exampleTextarea'
                  rows='3'
                ></textarea>
              </div>
              <div class='form-group'>
                <label for='exampleInputFile'>File input</label>
                <input
                  type='file'
                  class='form-control-file'
                  id='exampleInputFile'
                  aria-describedby='fileHelp'
                />
                <small id='fileHelp' class='form-text text-muted'>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </small>
              </div>
              <fieldset class='form-group'>
                <legend>Radio buttons</legend>
                <div class='form-check'>
                  <label class='form-check-label'>
                    <input
                      type='radio'
                      class='form-check-input'
                      name='optionsRadios'
                      id='optionsRadios1'
                      value='option1'
                      checked=''
                    />
                    Option one is this and that—be sure to include why it's
                    great
                  </label>
                </div>
                <div class='form-check'>
                  <label class='form-check-label'>
                    <input
                      type='radio'
                      class='form-check-input'
                      name='optionsRadios'
                      id='optionsRadios2'
                      value='option2'
                    />
                    Option two can be something else and selecting it will
                    deselect option one
                  </label>
                </div>
                <div class='form-check disabled'>
                  <label class='form-check-label'>
                    <input
                      type='radio'
                      class='form-check-input'
                      name='optionsRadios'
                      id='optionsRadios3'
                      value='option3'
                      disabled=''
                    />
                    Option three is disabled
                  </label>
                </div>
              </fieldset>
              <fieldset class='form-group'>
                <legend>Checkboxes</legend>
                <div class='form-check'>
                  <label class='form-check-label'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      checked=''
                    />
                    Option one is this and that—be sure to include why it's
                    great
                  </label>
                </div>
                <div class='form-check disabled'>
                  <label class='form-check-label'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      disabled=''
                    />
                    Option two is disabled
                  </label>
                </div>
              </fieldset>
              <fieldset class='form-group'>
                <legend>Sliders</legend>
                <label for='customRange1'>Example range</label>
                <input type='range' class='custom-range' id='customRange1' />
              </fieldset>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </fieldset>
          </form>
        </div>

        <div class='col-lg-4'>
          <div class='form-group'>
            <fieldset disabled=''>
              <label class='control-label' for='disabledInput'>
                Disabled input
              </label>
              <input
                class='form-control'
                id='disabledInput'
                type='text'
                placeholder='Disabled input here...'
                disabled=''
              />
            </fieldset>
          </div>

          <div class='form-group'>
            <fieldset>
              <label class='control-label' for='readOnlyInput'>
                Readonly input
              </label>
              <input
                class='form-control'
                id='readOnlyInput'
                type='text'
                placeholder='Readonly input here...'
                readonly=''
              />
            </fieldset>
          </div>

          <div class='form-group has-success'>
            <label class='form-control-label' for='inputValid'>
              Valid input
            </label>
            <input
              type='text'
              value='correct value'
              class='form-control is-valid'
              id='inputValid'
            />
            <div class='valid-feedback'>Success! You've done it.</div>
          </div>

          <div class='form-group has-danger'>
            <label class='form-control-label' for='inputInvalid'>
              Invalid input
            </label>
            <input
              type='text'
              value='wrong value'
              class='form-control is-invalid'
              id='inputInvalid'
            />
            <div class='invalid-feedback'>
              Sorry, that username's taken. Try another?
            </div>
          </div>

          <div class='form-group'>
            <label class='col-form-label col-form-label-lg' for='inputLarge'>
              Large input
            </label>
            <input
              class='form-control form-control-lg'
              type='text'
              placeholder='.form-control-lg'
              id='inputLarge'
            />
          </div>

          <div class='form-group'>
            <label class='col-form-label' for='inputDefault'>
              Default input
            </label>
            <input
              type='text'
              class='form-control'
              placeholder='Default input'
              id='inputDefault'
            />
          </div>

          <div class='form-group'>
            <label class='col-form-label col-form-label-sm' for='inputSmall'>
              Small input
            </label>
            <input
              class='form-control form-control-sm'
              type='text'
              placeholder='.form-control-sm'
              id='inputSmall'
            />
          </div>

          <div class='form-group'>
            <label class='control-label'>Input addons</label>
            <div class='form-group'>
              <div class='input-group mb-3'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>$</span>
                </div>
                <input
                  type='text'
                  class='form-control'
                  aria-label='Amount (to the nearest dollar)'
                />
                <div class='input-group-append'>
                  <span class='input-group-text'>.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Navs</h3>
      <div class='row'>
        <div class='col-lg-6'>
          <ul class='nav nav-tabs'>
            <li class='nav-item'>
              <a class='nav-link active' data-toggle='tab' href='#home'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' data-toggle='tab' href='#profile'>
                Profile
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link disabled' href='#'>
                Disabled
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div class='dropdown-menu'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Separated link
                </a>
              </div>
            </li>
          </ul>
          <div id='myTabContent' class='tab-content'>
            <div class='tab-pane fade show active' id='home'>
              <p>
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.
              </p>
            </div>
            <div class='tab-pane fade' id='profile'>
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus mollit.
              </p>
            </div>
            <div class='tab-pane fade' id='dropdown1'>
              <p>
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork.
              </p>
            </div>
            <div class='tab-pane fade' id='dropdown2'>
              <p>
                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                art party before they sold out master cleanse gluten-free squid
                scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                art party locavore wolf cliche high life echo park Austin. Cred
                vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                farm-to-table VHS viral locavore cosby sweater.
              </p>
            </div>
          </div>
        </div>
        <div class='col-lg-4'>
          <ul class='nav nav-pills'>
            <li class='nav-item'>
              <a class='nav-link active' href='#'>
                Active
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div class='dropdown-menu'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Separated link
                </a>
              </div>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link disabled' href='#'>
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3>Indicators</h3>
      <div class='alert alert-dismissible alert-warning'>
        <button type='button' class='close' data-dismiss='alert'>
          &times;
        </button>
        <h4 class='alert-heading'>Warning!</h4>
        <p class='mb-0'>
          Best check yo self, you're not looking too good. Nulla vitae elit
          libero, a pharetra augue. Praesent commodo cursus magna,{' '}
          <a href='#' class='alert-link'>
            vel scelerisque nisl consectetur et
          </a>
          .
        </p>
      </div>

      <div class='alert alert-dismissible alert-danger'>
        <button type='button' class='close' data-dismiss='alert'>
          &times;
        </button>
        <strong>Oh snap!</strong>{' '}
        <a href='#' class='alert-link'>
          Change a few things up
        </a>{' '}
        and try submitting again.
      </div>

      <div class='alert alert-dismissible alert-success'>
        <button type='button' class='close' data-dismiss='alert'>
          &times;
        </button>
        <strong>Well done!</strong> You successfully read{' '}
        <a href='#' class='alert-link'>
          this important alert message
        </a>
        .
      </div>
      <h3>Containers</h3>
      <div class='jumbotron'>
        <h1 class='display-3'>Hello, world!</h1>
        <p class='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class='my-4' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class='lead'>
          <a class='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a>
        </p>
      </div>
      <h3>Cards</h3>

      <h3>Dialog Boxes</h3>
      <div class='modal'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Modal title</h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <p>Modal body text goes here.</p>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-primary'>
                Save changes
              </button>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
