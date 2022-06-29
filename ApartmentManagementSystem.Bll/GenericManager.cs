using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Bll
{
    public class GenericManager<T, TDto> : IGenericService<T, TDto> where T : EntityBase where TDto : DtoBase
    {

        #region Variables
        private readonly IUnitOfWork unitOfWork;
        private readonly IServiceProvider serviceProvider;
        private readonly IGenericRepository<T> repository;
        #endregion

        public GenericManager(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
            unitOfWork = serviceProvider.GetService<IUnitOfWork>();
            repository=unitOfWork.GetRepository<T>();

        }

        public IResponse<TDto> Add(TDto model, bool saveChanges = true)
        {
            try
            {
                var mappedModel = ObjectMapper.Mapper.Map<T>(model);
                var result = repository.Add(mappedModel);

                if (saveChanges)
                    Save();

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data=ObjectMapper.Mapper.Map<T,TDto>(result)
                };
            }
            catch (Exception ex)
            {

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data =null
                };
            }
        }

        public async Task<IResponse<TDto>> AddAsync(TDto model, bool saveChanges = true)
        {
            try
            {
                var mappedModel = ObjectMapper.Mapper.Map<T>(model);
                var result =await repository.AddAsync(mappedModel);

                if (saveChanges)
                    Save();

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = ObjectMapper.Mapper.Map<T, TDto>(result)
                };
            }
            catch (Exception ex)
            {

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public IResponse<bool> Delete(int id, bool saveChanges = true)
        {
            try
            {
                repository.Delete(id);
                if (saveChanges)
                    Save();
                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = true
                };
            }
            catch (Exception ex)
            {
                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = false
                };
            }
        }

        public IResponse<bool> Delete(TDto model, bool saveChanges = true)
        {
            try
            {
                repository.Delete(ObjectMapper.Mapper.Map<TDto,T>(model));
                if (saveChanges)
                    Save();

                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = true
                };
            }
            catch (Exception ex)
            {
                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = false
                };
            }
        }

        public IResponse<TDto> Find(int id)
        {
            try
            {
                var entity = ObjectMapper.Mapper.Map<T,TDto>(repository.Find(id));
                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = entity
                };
            }
            catch (Exception ex)
            {

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public IResponse<List<TDto>> GetAll()
        {
            try
            {
                var list =repository.GetAll();
                var listDto = list.Select(x=>ObjectMapper.Mapper.Map<TDto>(x)).ToList();

                return new Response<List<TDto>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
            }
            catch (Exception ex)
            {

                return new Response<List<TDto>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public IResponse<List<TDto>> GetAll(Expression<Func<T, bool>> expression)
        {
            try
            {
                var list = repository.GetAll(expression);
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<TDto>(x)).ToList();

                return new Response<List<TDto>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
            }
            catch (Exception ex)
            {

                return new Response<List<TDto>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public IResponse<IQueryable<TDto>> GetQueryable()
        {
            try
            {
                var list = repository.GetQueryable();
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<TDto>(x));

                return new Response<IQueryable<TDto>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
            }
            catch (Exception ex)
            {

                return new Response<IQueryable<TDto>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public void Save()
        {
            unitOfWork.SaveChanges();
        
        }

        public IResponse<TDto> Update(TDto model, bool saveChanges = true)
        {
            try
            {
                var mappedModel = ObjectMapper.Mapper.Map<T>(model);
                var result = repository.Update(mappedModel);

                if (saveChanges)
                    Save();

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = ObjectMapper.Mapper.Map<T, TDto>(result)
                };
            }
            catch (Exception ex)
            {

                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

     }
}
