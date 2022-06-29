using ApartmentManagementSystem.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Dal.Abstract
{
    public interface IGenericRepository<T> where T:IEntityBase
    {
        List<T> GetAll();
        List<T> GetAll(Expression<Func<T, bool>> expression);
        T Find(int id);
        T Add(T model);
        Task<T> AddAsync(T model);
        T Update(T model); 
        bool Delete(int id);
        bool Delete(T item);
         IQueryable<T> GetQueryable();
    }
}
