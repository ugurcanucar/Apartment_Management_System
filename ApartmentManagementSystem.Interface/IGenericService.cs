using ApartmentManagementSystem.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Interface
{
    public interface IGenericService<T,TDto> where T:IEntityBase where TDto:IDtoBase  
    {
        IResponse<List<TDto>> GetAll();
        IResponse<List<TDto>> GetAll(Expression<Func<T,bool>> expression);
        IResponse<TDto> Find(int id);
        TDto FindModel(int id);    
        IResponse<TDto> Add(TDto model, bool saveChanges = true);
        Task<IResponse<TDto>> AddAsync(TDto model, bool saveChanges = true);
        IResponse<TDto> Update(TDto model, bool saveChanges = true);
         IResponse<bool> Delete(int id,bool saveChanges=true);
        IResponse<bool> Delete(TDto model,bool saveChanges=true);
 
        IResponse<IQueryable<TDto>> GetQueryable();

        void Save();

    }
}
