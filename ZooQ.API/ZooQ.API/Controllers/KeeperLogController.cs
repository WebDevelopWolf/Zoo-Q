using System;
using System.Web.Http;
using ZooQ.API.Models;

namespace ZooQ.API.Controllers
{
    public class KeeperLogController : ApiController
    {
        private MyDbContext _ZooQDB = new MyDbContext();

        [Route("log/add")]
        public void AddNewLog ([FromBody] KeeperLog log)
        {
            var NewLog = log;
            NewLog.ConfirmationDate = DateTime.Now;
            _ZooQDB.KeeperLogs.Add(NewLog);
            _ZooQDB.SaveChanges();
        }
        
    }
}
