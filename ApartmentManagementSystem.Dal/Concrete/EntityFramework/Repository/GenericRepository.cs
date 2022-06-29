using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{

    public class GenericRepository<T> : IGenericRepository<T> where T : EntityBase
    {

        #region Variables
        protected DbContext context;
        protected DbSet<T> dbSet;

        #endregion

        public GenericRepository(DbContext context)
        {
            this.context = context;
            dbSet = this.context.Set<T>();

 
        }

        #region Methods
        public T Add(T model)
        {
            context.Entry(model).State = EntityState.Added;
            dbSet.Add(model);

            return model;

        }

        public async Task<T> AddAsync(T model)
        {

            context.Entry(model).State = EntityState.Added;
            
           await dbSet.AddAsync(model);
            return model;
        }

        public bool Delete(int id)
        {
            return Delete(Find(id));
        }

        public bool Delete(T item)
        {
            if (context.Entry(item).State == EntityState.Detached)
            {
                context.Attach(item);
            }
            return dbSet.Remove(item) != null;
        } 

        public T Find(int id)
        {
            return dbSet.Find(id);
        }

        public List<T> GetAll()
        {
            return dbSet.ToList();
        }

        public List<T> GetAll(Expression<Func<T, bool>> expression)
        {
            return dbSet.Where(expression).ToList();
        }

        public IQueryable<T> GetQueryable()
        {
            return dbSet.AsQueryable();
        }

        public T Update(T model)
        {
            dbSet.Update(model);
            return model;
        }

       
        #endregion


    }
}
