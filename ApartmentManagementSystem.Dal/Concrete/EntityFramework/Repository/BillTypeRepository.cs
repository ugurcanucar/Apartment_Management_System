using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class BillTypeRepository : GenericRepository<BillType>, IBillTypeRepository
    {
        public BillTypeRepository(DbContext context):base(context)
        {

        }
       
    }
}
