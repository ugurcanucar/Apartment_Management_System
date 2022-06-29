using ApartmentManagementSystem.Entity.Base;

#nullable disable

namespace ApartmentManagementSystem.Entity.Dto
{
    public class DtoBlock : DtoBase
    {
        public DtoBlock()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }

       
    }
}
