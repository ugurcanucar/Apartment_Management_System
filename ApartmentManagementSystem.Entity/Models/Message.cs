using ApartmentManagementSystem.Entity.Base;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public partial class Message : EntityBase
    {
        public int Id { get; set; }
        public string MessageContent { get; set; }
        public int ReceiverId { get; set; }
        public int UserId { get; set; }
        public bool? IsRead { get; set; }

        public virtual User Receiver { get; set; }
        public virtual User User { get; set; }
    }
}
