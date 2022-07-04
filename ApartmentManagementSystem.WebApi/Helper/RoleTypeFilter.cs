using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace ApartmentManagementSystem.WebApi.Helper
{
    public class RoleTypeFilter : Attribute, IActionFilter
    {
        private List<string> _requiredAccountTypes;
        public RoleTypeFilter(params string[] accountTypes)
        {
            _requiredAccountTypes = accountTypes.ToList();
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {

        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var role = context.HttpContext.User?.FindFirst(f => f.Type == ClaimTypes.Role)?.Value;

            if (!_requiredAccountTypes.Any(a => a == role))
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}
