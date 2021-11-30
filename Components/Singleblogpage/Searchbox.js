const Searchbox = () => {
  return (
    <div className="sidebar-widget-wrapper">
      <div className="sidebar-widget">
        <h3 className="sidebar-widget-title">Search</h3>
        <div className="sidebar-widget-content">
          <div className="sidebar-widget-search">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
