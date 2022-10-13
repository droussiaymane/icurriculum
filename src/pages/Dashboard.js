import React from 'react'

const Dashboard = () => {
  return (
 <>
        <div class="wrapper">
       
        <div className="leftside-menu leftside-menu-padding">
    
    <a href="index.html" class="logo text-center logo-light">
        <span class="logo-lg py-2">
            <img src="assets/img/badgeCloudLogo.png" alt="" height="100"/>
        </span>
        <span class="logo-sm py-2">
            <img src="assets/img/badgeCloudLogo.png" alt="" height="36"/>
        </span>
    </a>

    <div class="h-100" id="leftside-menu-container" data-simplebar>

        <ul class="side-nav">

          

            <li class="side-nav-item">
                <a href="index.html" class="side-nav-link">
                    <i class="uil-home-alt"></i>
                    <span> Dashboards </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="user/user-manager.html" class="side-nav-link">
                    <i class="uil-users-alt"></i>
                    <span> User Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarProgram" aria-expanded="false" aria-controls="sidebarProgram" class="side-nav-link">
                    <i class="uil-sitemap"></i>
                    <span> Program Manager </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarProgram">
                    <ul class="side-nav-second-level">
                        <li>
                            <a href="program/program-list.html">Program List</a>
                        </li>
                        <li>
                            <a href="program/competencies.html">Competencies</a>
                        </li>
                        <li>
                            <a href="program/earning-requirements.html">Earning Requirements</a>
                        </li>
                        <li>
                            <a href="program/standards.html">Standards</a>
                        </li>
                        <li>
                            <a href="program/evidences.html">Evidence</a>
                        </li>
                        <li>
                            <a href="program/additional-details.html">Additional Details</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="side-nav-item">
                <a href="badge/badge-collection-list.html" class="side-nav-link">
                    <i class="uil-award"></i>
                    <span> Badge Template Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a data-bs-toggle="collapse" href="#sidebarTagManager" aria-expanded="false" aria-controls="sidebarTagManager" class="side-nav-link">
                    <i class="uil-tag-alt"></i>
                    <span> Tag Manager </span>
                    <span class="menu-arrow"></span>
                </a>
                <div class="collapse" id="sidebarTagManager">
                    <ul class="side-nav-second-level">
                        <li>
                            <a href="tag-manager/tag-manager-badge-collection.html">Badge Collection</a>
                        </li>
                        <li>
                            <a href="tag-manager/tag-manager-new-badge.html">New Badge</a>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="side-nav-item">
                <a href="attribute-manager/attribute-manager.html" class="side-nav-link">
                    <i class="uil-subject"></i>
                    <span> Attribute Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="curriculum-manager/curriculum-manager.html" class="side-nav-link">
                    <i class="uil-book-open"></i>
                    <span> Curriculum Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="webform-manager.html" class="side-nav-link">
                    <i class="uil-window-grid"></i>
                    <span> Webform Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-building"></i>
                    <span> Organizations </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-folder-plus"></i>
                    <span> File Manager </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-money-stack"></i>
                    <span> License </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-cloud-upload"></i>
                    <span> Deployment </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-analytics"></i>
                    <span> Report </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-chart-line"></i>
                    <span> Workflow </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-technology"></i>
                    <span> Integration </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-presentation-lines-alt"></i>
                    <span> API Library </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-shield-check"></i>
                    <span> Security </span>
                </a>
            </li>

            <li class="side-nav-item">
                <a href="#" class="side-nav-link">
                    <i class="uil-cog"></i>
                    <span> System Settings </span>
                </a>
            </li>

        </ul>

        <div class="clearfix"></div>

    </div>

</div>
        
        </div>
        <div class="content-page">
                <div class="content">

                    <div class="navbar-custom">
                        <ul class="list-unstyled topbar-menu float-end mb-0">
                            <li class="dropdown notification-list topbar-dropdown">
                                <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <span class="align-middle">Change Role</span> <i class="mdi mdi-chevron-down align-middle"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">

                       
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <span class="align-middle">Org Admin</span>
                                    </a>
                             
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <span class="align-middle">Org Instructor</span>
                                    </a>
                            
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <span class="align-middle">Org Student</span>
                                    </a>

                                </div>
                            </li>
                            
                            <li class="notification-list topbar-dropdown">
                                <a class="nav-link" href="javascript: void(0);">
                                    <span class="align-middle"> Help </span>
                                </a>
                            </li>

                            <li class="dropdown notification-list">
                                <a class="nav-link dropdown-toggle nav-user arrow-none me-0 custom-nav-user" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                    aria-expanded="false">
                                    <span class="account-user-avatar"> 
                                        <img src="assets/img/user.png" alt="user-image" class="rounded-circle"/>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                  
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-logout me-1"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>

                        </ul>
                        <button class="button-menu-mobile open-left">
                            <i class="mdi mdi-menu"></i>
                        </button>
                        <div class="app-search dropdown d-none d-lg-block">
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control dropdown-toggle"  placeholder="Search..." id="top-search"/>
                                    <span class="mdi mdi-magnify search-icon"></span>
                                    <button class="input-group-text btn-primary" type="submit">Search</button>
                                </div>
                            </form>

                           <div class="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">   
                                <div class="dropdown-header noti-title">
                                    <h5 class="text-overflow mb-2">Found <span class="text-danger">17</span> results</h5>
                                </div>

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-notes font-16 me-1"></i>
                                    <span>Analytics Report</span>
                                </a>

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-life-ring font-16 me-1"></i>
                                    <span>How can I help you?</span>
                                </a>

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="uil-cog font-16 me-1"></i>
                                    <span>User profile settings</span>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div class="container-fluid">
                        
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Hello <span>Admin</span>, Welcome Back!</h4>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-format-list-bulleted widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Number of programs</h5>
                                        <h3 class="mt-3 mb-3">143</h3>
                                    </div> 
                                </div>
                            </div> 

                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-view-grid-plus-outline widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Number of collections</h5>
                                        <h3 class="mt-3 mb-3">55</h3>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-account-tie-outline widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Number of instructors</h5>
                                        <h3 class="mt-3 mb-3">23</h3>
                                    </div>
                                </div>
                            </div> 

                            <div class="col-sm-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="dripicons-graduation widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Number of students</h5>
                                        <h3 class="mt-3 mb-3">1000</h3>
                                    </div> 
                                </div> 
                            </div> 
                        </div>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body pb-0">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <h4 class="header-title">Calendar</h4>
                                        </div>
                                    </div>
                                    <div class="card-body px-2 pb-2 pt-0">
                                        <div data-provide="datepicker-inline" data-date-today-highlight="true" class="calendar-widget"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body pb-0">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <h4 className="header-title">Weather</h4>
                                        </div>
                                    </div>
                                    <div class="card-body pt-2">
                                        <div id="ww_a1deb85eb85e2" v='1.20' loc='auto' a='{"t":"horizontal","lang":"en","ids":[],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFFFFF","cl_thund":"#5DA1FF","sl_sot":"celsius","sl_ics":"one","font":"Arial","el_whr":3,"el_phw":3}'><a href="https://weatherwidget.org/" id="ww_a1deb85eb85e2_u" target="_blank" className='hrefCss'>Weather widget html for website by Weatherwidget.org</a></div><script async src="https://srv2.weatherwidget.org/js/?id=ww_a1deb85eb85e2"></script>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        
                    </div> 

                </div> 


                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> © Vizzibl LLC
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-end footer-links d-none d-md-block">
                                    <a href="terms-and-conditions.html">Terms & Conditions</a>
                                    <a href="privacy-policy.html">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

 
</>
  )
}

export default Dashboard