using CustomCalendar.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CustomCalendar.Controllers
{
    public class HomeController : Controller
    {
        private CalendarManager _calendar = new CalendarManager();

        public ActionResult Index()
        {
            var model = _calendar.getCalender(DateTime.Now.Month, DateTime.Now.Year);
            return View(model);
        }

        public ActionResult AsyncUpdateCalender(int month, int year)
        {
            if (HttpContext.Request.IsAjaxRequest())
            {
                var model = _calendar.getCalender(month, year);
                return Json(model, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return View();
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
