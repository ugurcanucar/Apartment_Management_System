using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class MessageRepository : GenericRepository<Message>, IMessageRepository
    {
        public MessageRepository(DbContext context):base(context)
        {

        }

        
    }
}
