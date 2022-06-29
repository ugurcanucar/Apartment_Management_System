using ApartmentManagementSystem.Entity.Base;
using System;

namespace ApartmentManagementSystem.Dal.Abstract
{
    public interface IUnitOfWork:IDisposable
    {
        IGenericRepository<T> GetRepository<T>() where T : EntityBase;

        bool BeginTransaction();
        bool RollBackTransaction();

        int SaveChanges();

    }
}
