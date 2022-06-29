using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class ApartmentTypeRepository : GenericRepository<ApartmentType>, IApartmentTypeRepository
    {
        public ApartmentTypeRepository(DbContext context):base(context)
        {

        }
       
    }
}
