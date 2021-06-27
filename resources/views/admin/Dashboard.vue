<template>
    <div>
        
        <admin-header></admin-header>
        
        <div class="container-fluid">
            <div class="row">
                
                <side-nav></side-nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 section-content">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                          <div class="btn-group me-2">
                              <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                          </div>
                          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                              <span data-feather="calendar"></span>
                              This week
                          </button>
                        </div>
                    </div>

                  <h2>Section title</h2>
                  <div class="table-responsive">
                      This is dashboard content
                  </div>
                </main>
            </div>
          </div>
    </div>
</template>

<script>
  import AdminHeader from '../../js/components/admin/Header'
  import SideNav from '../../js/components/admin/SideNav'

  export default {
      components: {
          AdminHeader,
          SideNav
      },
      created() {
        if( localStorage.hasOwnProperty('user_token') ){
          console.log('logged in')
        }else{
          window.location.replace('/login')
        }
      }
  }
</script>

<style scoped>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

    .section-content{ margin-left: auto !important; }
    
   body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}


</style>